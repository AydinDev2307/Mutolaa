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
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
        }

        .libraries-hero {
          padding: 80px 0 60px;
          text-align: center;
          color: white;
          position: relative;
        }

        .libraries-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .libraries-hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: #FFC107;
          text-shadow: 0 0 30px rgba(255, 193, 7, 0.3);
          position: relative;
          z-index: 1;
        }

        .libraries-hero p {
          font-size: 1.3rem;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
          position: relative;
          z-index: 1;
        }

        .libraries-content {
          background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
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
          background: #2d2d2d;
          border: 2px solid rgba(255, 193, 7, 0.2);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .library-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(255, 193, 7, 0.4);
          border-color: #FFC107;
        }

        .library-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
        }

        .library-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #FFC107;
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
          color: rgba(255, 255, 255, 0.7);
        }

        .info-icon {
          width: 30px;
          height: 30px;
          background: rgba(255, 193, 7, 0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }

        .library-badge {
          display: inline-block;
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          color: #1a1a1a;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: 15px;
          box-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);
        }

        .cta-section {
          margin-top: 60px;
          padding: 40px;
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          border-radius: 20px;
          text-align: center;
          color: #1a1a1a;
          box-shadow: 0 10px 30px rgba(255, 193, 7, 0.4);
        }

        .cta-section h2 {
          font-size: 2rem;
          margin-bottom: 15px;
          font-weight: 800;
        }

        .cta-section p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 25px;
        }

        .cta-button {
          background: #1a1a1a;
          color: #FFC107;
          border: none;
          padding: 15px 40px;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
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
                  color: '#FFC107',
                  textShadow: '0 2px 10px rgba(255, 193, 7, 0.3)',
                }}>
                Barcha kutubxonalar
              </h2>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}>
                Jami: {libraries.length} ta kutubxona
              </p>
            </Flex>

            <div className="libraries-grid">
              {loading ? (
                <p style={{ color: '#FFC107', fontSize: '1.2rem' }}>
                  Yuklanmoqda...
                </p>
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

            <div className="cta-section">
              <h2>Kutubxonangizni qo'shing!</h2>
              <p>
                Agar siz kutubxona egasi bo'lsangiz va bizning platformamizga
                qo'shilmoqchi bo'lsangiz, biz bilan bog'laning.
              </p>
              <button className="cta-button">Bog'lanish</button>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default LIbaries;
