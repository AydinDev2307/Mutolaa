import React, { useState } from 'react';
import { Container } from '@mantine/core';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <style>{`
        .login-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .login-container {
          background: white;
          border-radius: 30px;
          padding: 50px;
          max-width: 480px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .login-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .login-logo {
          font-size: 2.5rem;
          font-weight: 800;
          color: #667eea;
          margin-bottom: 10px;
        }

        .login-logo span {
          color: #FFD93D;
        }

        .login-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 10px;
        }

        .login-subtitle {
          font-size: 1rem;
          color: #718096;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-label {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 8px;
        }

        .form-input {
          width: 100%;
          padding: 14px 18px;
          font-size: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          outline: none;
          transition: all 0.3s ease;
          background: #f7fafc;
        }

        .form-input:focus {
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .toggle-form {
          text-align: center;
          margin-top: 25px;
          font-size: 0.95rem;
          color: #718096;
        }

        .toggle-link {
          color: #667eea;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }

        .toggle-link:hover {
          text-decoration: underline;
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 30px 0;
          color: #a0aec0;
          font-size: 0.9rem;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }

        .divider span {
          padding: 0 15px;
        }

        .social-login {
          display: flex;
          gap: 15px;
        }

        .social-btn {
          flex: 1;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          border-color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .forgot-password {
          text-align: right;
          margin-top: 10px;
        }

        .forgot-password a {
          color: #667eea;
          font-size: 0.9rem;
          text-decoration: none;
          font-weight: 600;
        }

        .forgot-password a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .login-container {
            padding: 30px 25px;
          }

          .login-logo {
            font-size: 2rem;
          }

          .login-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="login-page">
        <Container>
          <div className="login-container">
            <div className="login-header">
              <h1 className="login-logo">
                Mutol<span>aa</span>
              </h1>
              <h2 className="login-title">
                {isLogin ? 'Xush kelibsiz!' : "Ro'yxatdan o'tish"}
              </h2>
              <p className="login-subtitle">
                {isLogin
                  ? "Hisobingizga kiring va o'qishni davom ettiring"
                  : "Yangi hisob yarating va minglab kitoblardan bahramand bo'ling"}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="form-group">
                  <label className="form-label">Ism va Familiya</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Ismingizni kiriting"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Parol</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {isLogin && (
                <div className="forgot-password">
                  <a href="#">Parolni unutdingizmi?</a>
                </div>
              )}

              <button type="submit" className="submit-btn">
                {isLogin ? 'Kirish' : "Ro'yxatdan o'tish"}
              </button>
            </form>

            <div className="divider">
              <span>yoki</span>
            </div>

            <div className="social-login">
              <button className="social-btn">G</button>
              <button className="social-btn">f</button>
              <button className="social-btn">@</button>
            </div>

            <div className="toggle-form">
              {isLogin ? (
                <>
                  Hisobingiz yo'qmi?{' '}
                  <span
                    className="toggle-link"
                    onClick={() => setIsLogin(false)}>
                    Ro'yxatdan o'tish
                  </span>
                </>
              ) : (
                <>
                  Hisobingiz bormi?{' '}
                  <span
                    className="toggle-link"
                    onClick={() => setIsLogin(true)}>
                    Kirish
                  </span>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
