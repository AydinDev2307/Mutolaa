import { useEffect, useState } from 'react';
import { Container } from '@mantine/core';
import { useParams, useNavigate } from 'react-router-dom';
import { Libraries } from '../centerAPI/APIs.jsx';

const DetailLibraries = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [library, setLibrary] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        setLoading(true);
        setError(null);
        const allLibraries = await Libraries.get('/libraries/libraries');
        const foundLibrary = Array.isArray(allLibraries.data)
          ? allLibraries.data.find((lib) => lib.id === parseInt(id))
          : null;
        if (!foundLibrary) {
          setError('Kutubxona topilmadi');
          setLoading(false);
          return;
        }
        setLibrary(foundLibrary);

        if (foundLibrary.category) {
          const similarLibraries = allLibraries.data.filter(
            (lib) =>
              lib.category === foundLibrary.category && lib.id !== parseInt(id)
          );
          setSimilar(similarLibraries);
        } else {
          const otherLibraries = allLibraries.data
            .filter((lib) => lib.id !== parseInt(id))
            .slice(0, 8);
          setSimilar(otherLibraries);
        }
      } catch (err) {
        console.error('Xatolik:', err);
        setError(`Ma'lumotlarni yuklashda xatolik: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchLibrary();
    }
  }, [id]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
        }}>
        <div style={{ textAlign: 'center', color: '#FFC107' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              border: '4px solid rgba(255, 193, 7, 0.3)',
              borderTop: '4px solid #FFC107',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px',
            }}></div>
          <h2>Yuklanmoqda...</h2>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error || !library) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
        }}>
        <div style={{ textAlign: 'center', color: 'white', padding: '40px' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              color: '#FFC107',
            }}>
            ❌
          </h2>
          <h3 style={{ marginBottom: '20px', color: '#FFC107' }}>
            {error || 'Kutubxona topilmadi'}
          </h3>
          <p
            style={{
              marginBottom: '30px',
              opacity: 0.8,
              color: 'rgba(255, 255, 255, 0.7)',
            }}>
            ID: {id} - bu kutubxona mavjud emas
          </p>
          <div
            style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button
              onClick={() => navigate('/libraries')}
              style={{
                padding: '12px 30px',
                background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                color: '#1a1a1a',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
              }}>
              Barcha kutubxonalar
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 30px',
                background: 'rgba(255, 193, 7, 0.2)',
                color: '#FFC107',
                border: '2px solid #FFC107',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
              }}>
              Qayta urinish
            </button>
          </div>
        </div>
      </div>
    );
  }

  const visible = showAll ? similar : similar.slice(0, 4);

  return (
    <>
      <style>{`
        .detail-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
        }

        .detail-hero {
          padding: 80px 0 60px;
          color: white;
          position: relative;
        }

        .detail-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 60%);
          pointer-events: none;
        }

        .back-button {
          background: rgba(255, 193, 7, 0.2);
          border: 2px solid rgba(255, 193, 7, 0.3);
          color: #FFC107;
          padding: 12px 24px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }

        .back-button:hover {
          background: #FFC107;
          color: #1a1a1a;
          transform: translateX(-5px);
          box-shadow: 0 4px 12px rgba(255, 193, 7, 0.4);
        }

        .library-header {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }

        .library-icon-large {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          flex-shrink: 0;
          box-shadow: 0 10px 30px rgba(255, 193, 7, 0.4);
        }

        .library-title {
          flex: 1;
        }

        .library-title h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 15px;
          line-height: 1.2;
          color: #FFC107;
          text-shadow: 0 2px 10px rgba(255, 193, 7, 0.3);
        }

        .library-meta {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .detail-content {
          background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
          border-radius: 30px 30px 0 0;
          padding: 60px 0;
          margin-top: 40px;
        }

        .info-section {
          background: #2d2d2d;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 40px;
          border: 2px solid rgba(255, 193, 7, 0.2);
        }

        .info-section h2 {
          font-size: 2rem;
          color: #FFC107;
          margin-bottom: 25px;
          font-weight: 700;
          text-shadow: 0 2px 10px rgba(255, 193, 7, 0.3);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .info-card {
          background: #1a1a1a;
          padding: 25px;
          border-radius: 15px;
          border: 2px solid rgba(255, 193, 7, 0.2);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          border-color: #FFC107;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255, 193, 7, 0.3);
        }

        .info-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 8px;
        }

        .info-value {
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFC107;
        }

        .similar-section {
          margin-top: 60px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .section-title {
          font-size: 2rem;
          color: #FFC107;
          font-weight: 700;
          text-shadow: 0 2px 10px rgba(255, 193, 7, 0.3);
        }

        .toggle-button {
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          color: #1a1a1a;
          border: none;
          padding: 12px 30px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
        }

        .toggle-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 193, 7, 0.5);
        }

        .similar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }

        .similar-card {
          background: #2d2d2d;
          border: 2px solid rgba(255, 193, 7, 0.2);
          border-radius: 15px;
          padding: 25px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .similar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 193, 7, 0.4);
          border-color: #FFC107;
        }

        .similar-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 15px;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
        }

        .similar-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFC107;
          margin-bottom: 12px;
        }

        .similar-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .similar-info-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 768px) {
          .library-header {
            flex-direction: column;
            text-align: center;
          }

          .library-title h1 {
            font-size: 2rem;
          }

          .library-meta {
            justify-content: center;
          }

          .similar-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="detail-page">
        <section className="detail-hero">
          <Container style={{ width: '1240px', maxWidth: '100%' }}>
            <button
              className="back-button"
              onClick={() => navigate('/libraries')}>
              ← Orqaga
            </button>

            <div className="library-header">
              <div className="library-icon-large">📚</div>
              <div className="library-title">
                <h1>{library.name}</h1>
                <div className="library-meta">
                  <div className="meta-item">
                    <span>📍</span>
                    <span>{library.address}</span>
                  </div>
                  <div className="meta-item">
                    <span>📖</span>
                    <span>{library.total_books || 0} ta kitob</span>
                  </div>
                  {library.is_active && (
                    <div className="meta-item">
                      <span>✅</span>
                      <span>Faol</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="detail-content">
          <Container style={{ width: '1240px', maxWidth: '100%' }}>
            <div className="info-section">
              <h2>Kutubxona haqida</h2>
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-label">Nomi</div>
                  <div className="info-value">{library.name}</div>
                </div>
                <div className="info-card">
                  <div className="info-label">Manzil</div>
                  <div className="info-value">{library.address}</div>
                </div>
                <div className="info-card">
                  <div className="info-label">Kitoblar soni</div>
                  <div className="info-value">
                    {library.total_books || 0} ta
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-label">Holati</div>
                  <div className="info-value">
                    {library.is_active ? '✅ Faol' : '❌ Nofaol'}
                  </div>
                </div>
                {library.category && (
                  <div className="info-card">
                    <div className="info-label">Kategoriya</div>
                    <div className="info-value">{library.category}</div>
                  </div>
                )}
              </div>
            </div>

            {similar.length > 0 && (
              <div className="similar-section">
                <div className="section-header">
                  <h2 className="section-title">O'xshash kutubxonalar</h2>
                  {similar.length > 4 && (
                    <button
                      className="toggle-button"
                      onClick={() => setShowAll(!showAll)}>
                      {showAll
                        ? "Kamroq ko'rish"
                        : `Barchasini ko'rish (${similar.length})`}
                    </button>
                  )}
                </div>

                <div className="similar-grid">
                  {visible.map((lib) => (
                    <div
                      key={lib.id}
                      className="similar-card"
                      onClick={() => navigate(`/detailLibraries/${lib.id}`)}>
                      <div className="similar-icon">📚</div>
                      <h3 className="similar-name">{lib.name}</h3>
                      <div className="similar-info">
                        <div className="similar-info-item">
                          <span>📍</span>
                          <span>{lib.address}</span>
                        </div>
                        <div className="similar-info-item">
                          <span>📖</span>
                          <span>{lib.total_books || 0} ta kitob</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Container>
        </section>
      </div>
    </>
  );
};

export default DetailLibraries;
