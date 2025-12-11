import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import {
  Input,
  NumberInput,
  PasswordInput,
  Switch,
  Container,
} from '@mantine/core';
import { useState } from 'react';

const RegisterPage = () => {
  const [coords, setCoords] = useState(null);

  return (
    <>
      <Container>
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
          }}>
          <div>
            <Input
              w={800}
              mt={10}
              placeholder="Foydalanuvchi ism kiriting..."
            />
            <NumberInput mt={10} placeholder="Telefon raqam kiriting..." />
            <PasswordInput mt={10} placeholder="Parol kiriting..." />
            <Input mt={10} placeholder="Manzil Kiritng" />
          </div>

          <div>
            <Input w={800} mt={10} placeholder="Telegram username" />
            <Input mt={10} placeholder="Instagram username" />
            <Input mt={10} placeholder="Facebook username" />
            <Switch mt={20} label="Kitob ijarasi" />
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
              onClick={(e) => {
                const clickedCoords = e.get('coords');
                setCoords(clickedCoords);
              }}>
              <ZoomControl options={{ float: 'right' }} />
              {coords && <Placemark geometry={coords} />}
            </Map>
          </YMaps>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
