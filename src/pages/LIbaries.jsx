import React, { useEffect, useState } from 'react';
import { Container, Flex } from '@mantine/core';
import { Libraries } from '../centerAPI/APIs.jsx';
import { useNavigate } from 'react-router-dom';

const LIbaries = () => {
  const [libraries, setLibraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchLibraries = async () => {
    try {
      const res = await Libraries.get('/libraries/libraries');
      setLibraries(res.data);
    } catch (error) {
      console.error('Kitobxonalarni olishda xatolik:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLibraries();
  }, []);
  const libraryID = useNavigate();

  return (
    <>
      <style>{`
        .libraries-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .libraries-hero {
          padding: 80px 0 60px;
          text-align: center;
          color: white;
        }

        .libraries-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .libraries-hero p {
          font-size: 1.3rem;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
        }

        .libraries-content {
          background: white;
          border-radius: 30px 30px 0 0;
          padding: 60px 0;
          margin-top: 40px;
          min-height: 60vh;
        }

        .libraries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .library-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .library-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
          border-color: #667eea;
        }

        .library-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .library-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .library-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: #718096;
        }

        .info-icon {
          width: 30px;
          height: 30px;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }

        .library-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: 15px;
        }

        @media (max-width: 768px) {
          .libraries-hero h1 {
            font-size: 2.5rem;
          }

          .libraries-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="libraries-page">
        <section className="libraries-hero">
          <Container style={{ width: '1240px', maxWidth: '100%' }}>
            <h1>Hamkor kutubxonalar</h1>
            <p>
              O'zbekiston bo'ylab 100 dan ortiq hamkor kutubxonalar bilan
              birgalikda xizmat ko'rsatamiz. Quyida eng yirik kutubxonalarimiz
              ro'yxati keltirilgan.
            </p>
          </Container>
        </section>

        <section className="libraries-content">
          <Container style={{ width: '1240px', maxWidth: '100%' }}>
            <Flex
              justify="space-between"
              align="center"
              style={{ marginBottom: '20px' }}>
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#667eea',
                }}>
                Barcha kutubxonalar
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#718096' }}>
                Jami: {libraries.length} ta kutubxona
              </p>
            </Flex>
            <div className="libraries-grid">
              {loading ? (
                <p>Yuklanmoqda...</p>
              ) : (
                libraries.map((library) => (
                  <div
                    key={library.id}
                    className="library-card"
                    onClick={() => libraryID(`/detailLibraries/${library.id}`)}>
                    <div className="library-icon">📚</div>
                    <h3 className="library-name">{library.name}</h3>

                    <div className="library-info">
                      <div className="info-item">
                        <div className="info-icon">📍</div>
                        <span>{library.address}</span>
                      </div>

                      <div className="info-item">
                        <span>{library.is_active}</span>
                      </div>

                      <div className="info-item">
                        <div className="info-icon">📖</div>
                        <span>{library.total_books} ta kitob</span>
                      </div>
                    </div>

                    <div className="library-badge">Hamkor kutubxona</div>
                  </div>
                ))
              )}
            </div>

            <div
              style={{
                marginTop: '60px',
                padding: '40px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                textAlign: 'center',
                color: 'white',
              }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>
                Kutubxonangizni qo'shing!
              </h2>
              <p
                style={{
                  fontSize: '1.1rem',
                  opacity: '0.9',
                  marginBottom: '25px',
                }}>
                Agar siz kutubxona egasi bo'lsangiz va bizning platformamizga
                qo'shilmoqchi bo'lsangiz, biz bilan bog'laning.
              </p>
              <button
                style={{
                  background: 'white',
                  color: '#667eea',
                  border: 'none',
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}>
                Bog'lanish
              </button>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default LIbaries;
