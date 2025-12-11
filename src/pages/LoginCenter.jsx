import { Button, Container } from '@mantine/core';
import UserIcon from '../assets/user-icon.png';
import authStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginCenter = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, library, logout } = authStore();
  console.log(user);
  
  function chiqish() {
    logout();
    navigate('/');
  }

  return (
    <Container my={40} style={{ position: 'relative' }}>
      <div
        style={{
          width: '100%',
          height: 'min-h-400px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '30px',
          color: 'white',
        }}>
        <img style={{ width: '100px', margin: 'auto' }} src={UserIcon} alt="" />

        <h2>Ism: {user?.name}</h2>
        <h2>Telefon: {user?.phone}</h2>
        <h2>Manzil: {library?.address}</h2>
        <h3>
          Koordinatalar: {library?.latitude}, {library?.longitude}
        </h3>
        <h3>Telegram: {library?.social_media?.telegram}</h3>
        <h3>Instagram: {library?.social_media?.instagram}</h3>
        <h3>Facebook: {library?.social_media?.facebook}</h3>

        <Button color="red" onClick={() => setOpen(true)}>
          Chiqish
        </Button>
      </div>

      {open && (
        <div
          style={{
            width: '600px',
            height: '300px',
            zIndex: '10',
            position: 'absolute',
            backgroundColor: 'white',
            top: '45px',
            left: '370px',
            borderRadius: '20px',
          }}>
          <h1
            style={{ color: '#667eea', marginLeft: '10px', marginTop: '50px' }}>
            Rostdanham akkauntdan chiqasizmi?
          </h1>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}>
            <Button onClick={() => setOpen(false)} color="blue">
              Bekor qilish
            </Button>
            <Button onClick={chiqish} color="red">
              Tasdiqlash
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default LoginCenter;
