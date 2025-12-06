import { Loader, Text, Grid } from '@mantine/core';
import { Container, Flex } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://org-ave-jimmy-learners.trycloudflare.com/api/v1/books/book/${id}/`
        );
        setProduct(res.data);
        const simRes = await axios.get(
          `https://org-ave-jimmy-learners.trycloudflare.com/api/v1/books/books/?category=${res.data.category}`
        );
        setSimilar(simRes.data.filter((b) => b.id !== res.data.id));
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);
  const sliceBooks = showAll ? similar : similar.slice(0, 6);
  if (!product)
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}>
        <div style={{ textAlign: 'center' }}>
          <Loader size="xl" color="white" />
          <Text size="lg" style={{ color: 'white', marginTop: '20px' }}>
            Yuklanmoqda...
          </Text>
        </div>
      </div>
    );

  return (
    <>
      <style>{`
        .detail-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 0 80px;
        }

        .detail-hero {
          background: white;
          border-radius: 30px;
          padding: 50px;
          margin-bottom: 60px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .detail-content {
          display: flex;
          gap: 50px;
          align-items: flex-start;
        }

        .detail-image-wrapper {
          flex-shrink: 0;
        }

        .detail-book-image {
          width: 350px;
          height: 500px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 5rem;
          font-weight: 700;
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
        }

        .detail-info {
          flex: 1;
        }

        .detail-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2d3748;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .detail-meta {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1.1rem;
        }

        .meta-icon {
          width: 45px;
          height: 45px;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .meta-label {
          font-weight: 600;
          color: #667eea;
          min-width: 120px;
        }

        .meta-value {
          color: #4a5568;
          font-weight: 500;
        }

        .detail-actions {
          display: flex;
          gap: 15px;
          margin-top: 40px;
        }

        .action-btn {
          padding: 16px 40px;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: #667eea;
          color: white;
          transform: translateY(-3px);
        }

        .similar-section {
          background: white;
          border-radius: 30px;
          padding: 50px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        h4 {
          color: white;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

         h4:hover {
          color: #764ba2;
          transform: translateX(5px);
        }
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 30px;
        }

        .similar-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          height: 100%;
        }

        .similar-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(102, 126, 234, 0.15);
          border-color: #667eea;
        }

        .similar-image {
          width: 100%;
          height: 250px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .similar-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d3748;
          line-height: 1.4;
        }

        .back-button {
          background: white;
          color: #667eea;
          border: none;
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 30px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          transform: translateX(-5px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }

        @media (max-width: 768px) {
          .detail-hero {
            padding: 30px 20px;
          }

          .detail-content {
            flex-direction: column;
            gap: 30px;
          }

          .detail-book-image {
            width: 100%;
            max-width: 300px;
            height: 400px;
            margin: 0 auto;
          }

          .detail-title {
            font-size: 2rem;
          }

          .detail-actions {
            flex-direction: column;
          }

          .action-btn {
            width: 100%;
          }

          .similar-section {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="detail-page">
        <Container style={{ width: '1240px', maxWidth: '100%' }}>
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Orqaga
          </button>

          <div className="detail-hero">
            <div className="detail-content">
              <div className="detail-image-wrapper">
                <div className="detail-book-image">📚</div>
              </div>

              <div className="detail-info">
                <h1 className="detail-title">{product.name}</h1>

                <div className="detail-meta">
                  <div className="meta-item">
                    <div className="meta-icon">✍️</div>
                    <span className="meta-label">Muallif:</span>
                    <span className="meta-value">{product.author}</span>
                  </div>

                  <div className="meta-item">
                    <div className="meta-icon">🏢</div>
                    <span className="meta-label">Nashriyot:</span>
                    <span className="meta-value">{product.publisher}</span>
                  </div>

                  <div className="meta-item">
                    <div className="meta-icon">📚</div>
                    <span className="meta-label">Mavjudligi:</span>
                    <span className="meta-value">
                      {product.quantity_in_library} ta nusxa
                    </span>
                  </div>

                  {product.category && (
                    <div className="meta-item">
                      <div className="meta-icon">🏷️</div>
                      <span className="meta-label">Kategoriya:</span>
                      <span className="meta-value">{product.category}</span>
                    </div>
                  )}

                  {product.year && (
                    <div className="meta-item">
                      <div className="meta-icon">📅</div>
                      <span className="meta-label">Nashr yili:</span>
                      <span className="meta-value">{product.year}</span>
                    </div>
                  )}
                </div>

                <div className="detail-actions">
                  <button className="action-btn btn-primary">
                    O'qishni boshlash
                  </button>
                  <button className="action-btn btn-secondary">
                    Saqlab qo'yish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h4
            style={{ cursor: 'pointer' }}
            onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Yana 6 ta ko‘rsatish' : "Hammasini ko'rish →"}
          </h4>
          {sliceBooks.length > 0 && (
            <div className="similar-section">
              <h2 className="section-title">O'xshash kitoblar</h2>
              <Grid gutter="lg">
                {sliceBooks.map((item) => (
                  <Grid.Col
                    span={{ base: 12, sm: 6, md: 4, lg: 3 }}
                    key={item.id}>
                    <div
                      className="similar-card"
                      onClick={() => navigate(`/detail/${item.id}`)}>
                      <div className="similar-image">📚</div>
                      <h3 className="similar-title">
                        {item.name.length > 50
                          ? item.name.slice(0, 50) + '...'
                          : item.name}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: '#718096',
                          marginTop: '8px',
                        }}>
                        {item.author}
                      </p>
                    </div>
                  </Grid.Col>
                ))}
              </Grid>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Detail;
