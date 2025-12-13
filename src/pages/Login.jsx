import { Button, Input, PasswordInput } from '@mantine/core';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { LOGIN } from '../centerAPI/APIs';
import authStore from '../store/authStore';
import { useRef } from 'react';

const Login = () => {
  const { login } = authStore();
  const numberRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const { mutate: loginMutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: (body) => LOGIN.post('/auth/login/', body),
  });

  function handleSubmitLogin(e) {
    e.preventDefault();
    const newUser = {
      password: passRef.current.value,
      phone: numberRef.current.value,
    };
    loginMutate(newUser, {
      onSuccess: (res) => {
        login(res.data.user, res.data.access);
        if (newUser) return navigate('/');
      },
      onError: () => {
        alert('Login yoki parol xato!');
      },
    });
  }

  return (
    <>
      <style>{`
        .login-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
        }

        .login-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .login-container {
          background: #2d2d2d;
          border-radius: 30px;
          padding: 60px 50px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(255, 193, 7, 0.3);
          position: relative;
          border: 2px solid rgba(255, 193, 7, 0.2);
          z-index: 1;
        }

        .back-button {
          position: absolute;
          top: 30px;
          left: 30px;
          background: rgba(255, 193, 7, 0.2);
          color: #FFC107;
          border: 2px solid rgba(255, 193, 7, 0.3);
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .back-button:hover {
          background: #FFC107;
          color: #1a1a1a;
          transform: translateX(-3px);
          box-shadow: 0 4px 12px rgba(255, 193, 7, 0.4);
        }

        .login-header {
          text-align: center;
          margin-bottom: 40px;
          margin-top: 20px;
        }

        .login-logo {
          font-size: 2.5rem;
          font-weight: 800;
          color: #FFC107;
          margin-bottom: 10px;
          text-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
        }

        .login-logo span {
          color: #FFD54F;
        }

        .login-title {
          font-size: 2rem;
          font-weight: 700;
          color: #FFC107;
          margin-bottom: 10px;
        }

        .login-subtitle {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: #FFC107;
          margin-bottom: 8px;
        }

        .mantine-Input-input {
          padding: 14px 18px !important;
          font-size: 1rem !important;
          border: 2px solid rgba(255, 193, 7, 0.3) !important;
          border-radius: 12px !important;
          transition: all 0.3s ease !important;
          background: #1a1a1a !important;
          color: white !important;
        }

        .mantine-Input-input:focus {
          border-color: #FFC107 !important;
          background: #0a0a0a !important;
          box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2) !important;
        }

        .mantine-Input-input::placeholder {
          color: rgba(255, 255, 255, 0.4) !important;
        }

        .mantine-PasswordInput-input {
          padding: 14px 18px !important;
          font-size: 1rem !important;
          border: 2px solid rgba(255, 193, 7, 0.3) !important;
          border-radius: 12px !important;
          transition: all 0.3s ease !important;
          background: #1a1a1a !important;
          color: white !important;
        }

        .mantine-PasswordInput-input:focus {
          border-color: #FFC107 !important;
          background: #0a0a0a !important;
          box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2) !important;
        }

        .mantine-PasswordInput-input::placeholder {
          color: rgba(255, 255, 255, 0.4) !important;
        }

        .mantine-Button-root {
          width: 100%;
          height: 46px !important;
          font-size: 1.1rem !important;
          font-weight: 700 !important;
          color: #1a1a1a !important;
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%) !important;
          border: none !important;
          border-radius: 12px !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          margin-top: 10px !important;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3) !important;
        }

        .mantine-Button-root:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 20px rgba(255, 193, 7, 0.5) !important;
        }

        .toggle-form {
          text-align: center;
          margin-top: 25px;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .toggle-link {
          color: #FFC107;
          font-weight: 600;
          text-decoration: none;
        }

        .toggle-link:hover {
          color: #FFD54F;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .login-container {
            padding: 40px 25px;
          }

          .login-logo {
            font-size: 2rem;
          }

          .login-title {
            font-size: 1.5rem;
          }

          .back-button {
            top: 20px;
            left: 20px;
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <div className="login-page">
        <div className="login-container">
          <Link to="/" className="back-button">
            ← Orqaga
          </Link>

          <div className="login-header">
            <h1 className="login-logo">
              Mutol<span>aa</span>
            </h1>
            <h2 className="login-title">Tizimga kirish</h2>
            <p className="login-subtitle">
              Platformadan to'liq foydalanish uchun tizimga kiring
            </p>
          </div>

          <form onSubmit={handleSubmitLogin}>
            <div className="form-group">
              <label className="form-label">Telefon raqam</label>
              <Input
                ref={numberRef}
                type="text"
                placeholder="+998 __ ___ __ __"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Parol</label>
              <PasswordInput
                ref={passRef}
                placeholder="Parolni kiriting..."
                required
              />
            </div>

            <Button type="submit">Tizimga kiring</Button>

            <div className="toggle-form">
              Hisobingiz yo'qmi?{' '}
              <NavLink to="/register" className="toggle-link">
                Ro'yxatdan o'ting
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
