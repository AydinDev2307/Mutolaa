import { Button, Container } from '@mantine/core';
import UserIcon from '../assets/user-icon.png';
import authStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginCenter = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, library, logout } = authStore();

  function chiqish() {
    logout();
    navigate('/');
  }

  return (
    <>
      <style>{`
        .account-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          padding: 60px 20px;
        }

        .account-card {
          width: 100%;
          min-height: 400px;
          border-radius: 20px;
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px;
          color: #1a1a1a;
          box-shadow: 0 20px 60px rgba(255, 193, 7, 0.4);
          position: relative;
        }

        .user-avatar {
          width: 100px;
          margin: 0 auto 30px;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
        }

        .account-card h2, .account-card h3 {
          margin-bottom: 15px;
          font-weight: 700;
        }

        .account-card h2 {
          font-size: 1.5rem;
        }

        .account-card h3 {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .logout-btn {
          background: #dc2626 !important;
          color: white !important;
          margin-top: 30px !important;
          width: 200px;
          align-self: center;
        }

        .logout-btn:hover {
          background: #b91c1c !important;
          transform: translateY(-2px) !important;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          width: 500px;
          max-width: 90%;
          background: #2d2d2d;
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          border: 2px solid rgba(255, 193, 7, 0.3);
          box-shadow: 0 20px 60px rgba(255, 193, 7, 0.3);
        }

        .modal-content h1 {
          color: #FFC107;
          margin-bottom: 30px;
          font-size: 1.8rem;
        }

        .modal-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 30px;
        }

        .modal-btn {
          padding: 12px 30px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-cancel {
          background: rgba(255, 193, 7, 0.2);
          color: #FFC107;
          border: 2px solid #FFC107;
        }

        .btn-cancel:hover {
          background: #FFC107;
          color: #1a1a1a;
        }

        .btn-confirm {
          background: #dc2626;
          color: white;
        }

        .btn-confirm:hover {
          background: #b91c1c;
          transform: scale(1.05);
        }
      `}</style>

      <div className="account-page">
        <Container my={40} style={{ position: 'relative' }}>
          <div className="account-card">
            <img className="user-avatar" src={UserIcon} alt="User" />
            <h2>Ism: {user?.name}</h2>
            <h2>Telefon: {user?.phone}</h2>
            <h2>Manzil: {library?.address}</h2>
            <h3>
              Koordinatalar: {library?.latitude}, {library?.longitude}
            </h3>
            <h3>Telegram: {library?.social_media?.telegram}</h3>
            <h3>Instagram: {library?.social_media?.instagram}</h3>
            <h3>Facebook: {library?.social_media?.facebook}</h3>
            <Button className="logout-btn" onClick={() => setOpen(true)}>
              Chiqish
            </Button>
          </div>

          {open && (
            <div className="modal-overlay" onClick={() => setOpen(false)}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}>
                <h1>Rostdanham akkauntdan chiqasizmi?</h1>
                <div className="modal-buttons">
                  <button
                    className="modal-btn btn-cancel"
                    onClick={() => setOpen(false)}>
                    Bekor qilish
                  </button>
                  <button className="modal-btn btn-confirm" onClick={chiqish}>
                    Tasdiqlash
                  </button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default LoginCenter;
