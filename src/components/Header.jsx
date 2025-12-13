import { Button, Center, Flex } from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container } from '@mantine/core';
import { useState } from 'react';
import authStore from '../store/authStore';

const Header = ({ onSearch }) => {
  const { isAuth } = authStore();
  const [query, setQuery] = useState('');

  function handleInput(e) {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }

  const navigate = useNavigate();

  function navigatee(link) {
    navigate(link);
  }

  return (
    <>
      <style>{`
        header {
          background: #1a1a1a;
          box-shadow: 0 2px 10px rgba(255, 193, 7, 0.2);
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 193, 7, 0.2);
        }

        .header-logo {
          font-size: 1.8rem;
          font-weight: 800;
          cursor: pointer;
          color: #FFC107;
          transition: all 0.3s ease;
          user-select: none;
          text-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
        }

        .header-logo:hover {
          transform: scale(1.05);
          text-shadow: 0 0 30px rgba(255, 193, 7, 0.5);
        }

        .header-logo span {
          color: #FFD54F;
        }

        .header-nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .header-nav a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .header-nav a:hover {
          color: #FFC107;
          background: rgba(255, 193, 7, 0.1);
        }

        .header-nav a.active {
          color: #FFC107;
          background: rgba(255, 193, 7, 0.15);
        }

        .header-nav a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 80%;
          height: 2px;
          background: #FFC107;
          transition: transform 0.3s ease;
        }

        .header-nav a:hover::after,
        .header-nav a.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        .search-input {
          padding: 10px 20px;
          border: 2px solid rgba(255, 193, 7, 0.3);
          border-radius: 25px;
          outline: none;
          font-size: 0.95rem;
          width: 250px;
          transition: all 0.3s ease;
          background: #2d2d2d;
          color: white;
        }

        .search-input:focus {
          border-color: #FFC107;
          background: #1a1a1a;
          box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2);
          width: 280px;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
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
            <h1 onClick={() => navigatee('/')} className="header-logo">
              Mutol<span>aa</span>
            </h1>
            <nav className="header-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/libraries">Libraries</NavLink>
              {isAuth ? (
                <Flex align="center" gap="20px">
                  <NavLink to="/akkaunt">Akkaunt</NavLink>
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
