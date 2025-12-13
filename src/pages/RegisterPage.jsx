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
    <>
      <style>{`
        .register-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          padding: 60px 20px;
        }

        .register-container {
          display: flex;
          flex-direction: column;
          width: 63%;
          max-width: 1400px;
          margin: auto;
          gap: 20px;
        }

        .register-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          color: #FFC107;
          margin-bottom: 30px;
          text-shadow: 0 2px 10px rgba(255, 193, 7, 0.3);
        }

        .form-section {
          background: #2d2d2d;
          border-radius: 20px;
          padding: 40px;
          border: 2px solid rgba(255, 193, 7, 0.2);
          box-shadow: 0 10px 30px rgba(255, 193, 7, 0.2);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 20px;
        }

        .form-column {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .section-subtitle {
          font-size: 1.3rem;
          font-weight: 700;
          color: #FFC107;
          margin-bottom: 15px;
        }

        .mantine-Input-input {
          background: #1a1a1a !important;
          border: 2px solid rgba(255, 193, 7, 0.3) !important;
          color: white !important;
          padding: 12px 16px !important;
          border-radius: 10px !important;
          font-size: 1rem !important;
          transition: all 0.3s ease !important;
        }

        .mantine-Input-input:focus {
          border-color: #FFC107 !important;
          box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2) !important;
        }

        .mantine-Input-input::placeholder {
          color: rgba(255, 255, 255, 0.4) !important;
        }

        .mantine-PasswordInput-input {
          background: #1a1a1a !important;
          border: 2px solid rgba(255, 193, 7, 0.3) !important;
          color: white !important;
          padding: 12px 16px !important;
          border-radius: 10px !important;
          font-size: 1rem !important;
          transition: all 0.3s ease !important;
        }

        .mantine-PasswordInput-input:focus {
          border-color: #FFC107 !important;
          box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2) !important;
        }

        .mantine-Switch-track {
          background: rgba(255, 193, 7, 0.2) !important;
          border: 2px solid rgba(255, 193, 7, 0.3) !important;
        }

        .mantine-Switch-track[data-checked] {
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%) !important;
        }

        .mantine-Switch-label {
          color: rgba(255, 255, 255, 0.9) !important;
          font-weight: 600 !important;
        }

        .map-section {
          background: #2d2d2d;
          border-radius: 20px;
          padding: 30px;
          border: 2px solid rgba(255, 193, 7, 0.2);
          box-shadow: 0 10px 30px rgba(255, 193, 7, 0.2);
        }

        .coords-display {
          display: flex;
          gap: 30px;
          justify-content: center;
          margin-top: 20px;
        }

        .coords-item {
          color: #FFC107;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .button-group {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 30px;
        }

        .mantine-Button-root {
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%) !important;
          color: #1a1a1a !important;
          font-weight: 700 !important;
          padding: 12px 40px !important;
          border-radius: 10px !important;
          transition: all 0.3s ease !important;
          border: none !important;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3) !important;
        }

        .mantine-Button-root:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(255, 193, 7, 0.5) !important;
        }

        .back-btn {
          background: rgba(255, 193, 7, 0.2) !important;
          color: #FFC107 !important;
          border: 2px solid rgba(255, 193, 7, 0.3) !important;
          width: 120px;
        }

        .back-btn:hover {
          background: transparent !important;
          border-color: #FFC107 !important;
        }

        .cancel-btn {
          background: rgba(220, 38, 38, 0.2) !important;
          color: #dc2626 !important;
          border: 2px solid rgba(220, 38, 38, 0.3) !important;
        }

        .cancel-btn:hover {
          background: #dc2626 !important;
          color: white !important;
        }

        @media (max-width: 1024px) {
          .register-container {
            width: 90%;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="register-page">
        <div className="register-container">
          <Button onClick={() => navigate('/login')} className="back-btn">
            ← Orqaga
          </Button>

          <h1 className="register-title">Ro'yxatdan O'tish</h1>

          <div className="form-section">
            <div className="form-grid">
              <div className="form-column">
                <h3 className="section-subtitle">Shaxsiy Ma'lumotlar</h3>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Foydalanuvchi ism kiriting..."
                />
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+998901234567"
                />
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parol kiriting..."
                />
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Manzilni kiriting yoki xaritadan tanlang..."
                />
              </div>

              <div className="form-column">
                <h3 className="section-subtitle">Ijtimoiy Tarmoqlar</h3>
                <Input
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  placeholder="Telegram username"
                />
                <Input
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="Instagram username"
                />
                <Input
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  placeholder="Facebook username"
                />
                <Switch
                  checked={canRentBook}
                  onChange={(e) => setCanRentBook(e.currentTarget.checked)}
                  label="Kitob ijarasi"
                  mt={10}
                />
              </div>
            </div>
          </div>

          <div className="map-section">
            <h3 className="section-subtitle">Manzilni Xaritadan Tanlang</h3>
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

            <div className="coords-display">
              <div className="coords-item">
                Latitude: {coords ? coords[0].toFixed(6) : 'Tanlanmagan'}
              </div>
              <div className="coords-item">
                Longitude: {coords ? coords[1].toFixed(6) : 'Tanlanmagan'}
              </div>
            </div>
          </div>

          <div className="button-group">
            <Button className="cancel-btn" onClick={() => navigate('/')}>
              Bekor qilish
            </Button>
            <Button onClick={handleRegister}>Ro'yxatdan o'tish</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
