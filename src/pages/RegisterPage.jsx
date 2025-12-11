import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import { Input, PasswordInput, Switch, Button } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BooksAPI } from '../centerAPI/APIs';
import authStore from '../store/authStore';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [telegram, setTelegram] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [canRentBook, setCanRentBook] = useState(false);
  const { setUserData } = authStore();

  const [coords, setCoords] = useState(null);
  const navigate = useNavigate();

  const getAddressFromCoords = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://geocode-maps.yandex.ru/1.x/?apikey=8ced5711-35a3-4e14-aade-930cec709f73&format=json&geocode=${lon},${lat}`
      );

      const geoObject =
        res.data.response.GeoObjectCollection.featureMember[0].GeoObject;

      return geoObject.metaDataProperty.GeocoderMetaData.text;
    } catch (err) {
      console.log("Manzilni aniqlab bo'lmadi:", err);
      return '';
    }
  };

  const handleRegister = async () => {
    if (!coords) {
      alert('Xaritadan manzilni tanlang');
      return;
    }

    const payload = {
      user: {
        name,
        phone,
        password,
      },
      library: {
        address,
        can_rent_books: canRentBook,
        latitude: coords[0],
        longitude: coords[1],
        social_media: {
          telegram,
          instagram,
          facebook,
        },
      },
    };

    try {
      const res = await BooksAPI.post('/auth/register-library/', payload);
      setUserData({
        user: res.data.user,
        library: res.data.library,
      });
      console.log(res.data);
      alert("Muvaffaqiyatli ro'yxatdan o'tildi");
      setUserData(payload);
      navigate('/akkaunt');
    } catch (err) {
      alert("Ro'yxatdan o'tishda xatolik yuz berdi");
      console.log(err.response?.data);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '63%',
        margin: 'auto',
        gap: '20px',
        marginTop: '30px',
      }}>
      <Button onClick={() => navigate('/login')} w={100}>
        Orqaga
      </Button>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Input
            w={600}
            mt={10}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Foydalanuvchi ism kiriting..."
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mt={10}
            placeholder="+998901234567"
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mt={10}
            placeholder="Parol kiriting..."
          />
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            mt={10}
            placeholder="Manzilni kiriting yoki xaritadan tanlang..."
          />
        </div>

        <div>
          <Input
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            w={600}
            mt={10}
            placeholder="Telegram username"
          />
          <Input
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            mt={10}
            placeholder="Instagram username"
          />
          <Input
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            mt={10}
            placeholder="Facebook username"
          />
          <Switch
            checked={canRentBook}
            onChange={(e) => setCanRentBook(e.currentTarget.checked)}
            mt={20}
            label="Kitob ijarasi"
          />
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <YMaps query={{ apikey: '8ced5711-35a3-4e14-aade-930cec709f73' }}>
          <Map
            defaultState={{
              center: [41.2995, 69.2401],
              zoom: 12,
              controls: [],
            }}
            width="100%"
            height="500px"
            onClick={async (e) => {
              const clickedCoords = e.get('coords');
              setCoords(clickedCoords);

              const [latitude, longitude] = clickedCoords;
              const addressText = await getAddressFromCoords(
                latitude,
                longitude
              );

              setAddress(addressText);
            }}>
            <ZoomControl options={{ float: 'right' }} />
            {coords && <Placemark geometry={coords} />}
          </Map>
        </YMaps>
      </div>

      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'space-around',
        }}>
        <h3>Latitude: {coords ? coords[0] : 'Tanlanmagan'}</h3>
        <h3>Longitude: {coords ? coords[1] : 'Tanlanmagan'}</h3>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Button onClick={() => navigate('/')}>Bekor qilish</Button>
        <Button onClick={handleRegister}>Ro'yxatdan o'tish</Button>
      </div>
    </div>
  );
};

export default RegisterPage;
