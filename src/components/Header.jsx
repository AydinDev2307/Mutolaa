import { Button, Center, Flex } from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container } from '@mantine/core';
import { useState } from 'react';
import authStore from '../store/authStore';

const Header = ({ onSearch }) => {
  const { isAuth, logout } = authStore();
  const [query, setQuery] = useState('');

  function handleInput(e) {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate('/');
  }

  return (
    <>
      <style>{`
        header {
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .header-logo {
          font-size: 1.8rem;
          font-weight: 800;
          cursor: pointer;
          color: #667eea;
          transition: all 0.3s ease;
          user-select: none;
        }

        .header-logo:hover {
          transform: scale(1.05);
        }

        .header-logo span {
          color: #FFD93D;
        }

        .header-nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .header-nav a {
          color: #4a5568;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .header-nav a:hover {
          color: #667eea;
          background: rgba(102, 126, 234, 0.1);
        }

        .header-nav a.active {
          color: #667eea;
          background: rgba(102, 126, 234, 0.15);
        }

        .header-nav a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 80%;
          height: 2px;
          background: #667eea;
          transition: transform 0.3s ease;
        }

        .header-nav a:hover::after,
        .header-nav a.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        .search-input {
          padding: 10px 20px;
          border: 2px solid #e2e8f0;
          border-radius: 25px;
          outline: none;
          font-size: 0.95rem;
          width: 250px;
          transition: all 0.3s ease;
          background: #f7fafc;
        }

        .search-input:focus {
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          width: 280px;
        }

        .search-input::placeholder {
          color: #a0aec0;
        }

        @media (max-width: 768px) {
          .header-nav {
            gap: 1rem;
          }

          .header-nav a {
            font-size: 0.9rem;
            padding: 6px 12px;
          }

          .search-input {
            width: 150px;
          }

          .search-input:focus {
            width: 180px;
          }

          .header-logo {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <header>
        <Container style={{ width: '1240px', maxWidth: '100%' }}>
          <Flex
            align="center"
            justify="space-between"
            style={{ padding: '16px 0' }}>
            <h1 onClick={handleLogoClick} className="header-logo">
              Mutol<span>aa</span>
            </h1>
            <nav className="header-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/libraries">Libraries</NavLink>
              {isAuth ? (
                <Flex align="center" gap="20px">
                  <h3 style={{ color: '#667eea' }}>Admin</h3>
                  <Button color="red" onClick={logout}>
                    Logout
                  </Button>
                  <NavLink to="/addBook">Kitob Qo'shish</NavLink>
                </Flex>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </nav>
            <input
              type="text"
              className="search-input"
              placeholder="Kitob qidirish..."
              value={query}
              onChange={handleInput}
            />
          </Flex>
        </Container>
      </header>
    </>
  );
};

export default Header;
