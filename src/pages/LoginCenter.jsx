import { Button, Container } from '@mantine/core';
import UserIcon from '../assets/user-icon.png';
import authStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const LoginCenter = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  function chiqish() {
    navigate('/');
    logout();
  }
  const { logout } = authStore();
  return (
    <>
      <Container my={40} style={{ position: 'relative' }}>
        <div
          style={{
            width: '100%',
            height: '400px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            zIndex: '0',
          }}>
          <img style={{ width: '200px' }} src={UserIcon} alt="" />
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
              left: '170px',
              borderRadius: '20px',
            }}>
            <h1
              style={{
                color: '#667eea',
                marginLeft: '10px',
                marginTop: '50px',
              }}>
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
                Bekor Qilish
              </Button>
              <Button onClick={chiqish} color="red">
                Tasdiqlsh
              </Button>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default LoginCenter;
