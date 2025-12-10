import { useEffect, useState } from 'react';
import { Flex, Container, Button } from '@mantine/core';
import { BooksAPI } from '../centerAPI/APIs.jsx';
import { useNavigate } from 'react-router-dom';
import authStore from '../store/authStore.jsx';

const Home = ({ searchQuery = '' }) => {
  const { isAuth } = authStore();
  const [popularBooks, setPopularBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const fetchBooks = async () => {
    try {
      const res = await BooksAPI.get('/books/books');
      setPopularBooks(res.data);
    } catch (error) {
      console.error('Kitoblarni olishda xatolik:', error);
    } finally {
      setLoading(false);
    }
  };
  const detail = useNavigate();
  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await BooksAPI.delete(`/books/book/${id}/`);
      alert("Kitob muvaffaqiyatli o'chirildi!");
      console.log(res.data);
      setPopularBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (err) {
      console.error(err);
      alert('Xatolik: ' + JSON.stringify(err.response?.data));
    }
  };
  const filteredBooks = popularBooks.filter(
    (book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayedBooks = showAll ? filteredBooks : filteredBooks.slice(0, 6);
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 60px 0;
          color: white;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.2rem;
          opacity: 0.95;
          line-height: 1.6;
        }

        .download-btn {
          background: white;
          color: #667eea;
          padding: 15px 25px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .download-btn p {
          font-size: 0.85rem;
          opacity: 0.8;
          margin-bottom: 5px;
        }

        .download-btn b {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .video-container {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }

        .video-container:hover {
          transform: scale(1.02);
        }

        .books-section {
          background: white;
          padding: 60px 0;
          margin-top: 40px;
          border-radius: 30px 30px 0 0;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #667eea;
        }

        .section-header h4 {
          color: #667eea;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .section-header h4:hover {
          color: #764ba2;
          transform: translateX(5px);
        }

        .loading-text {
          text-align: center;
          padding: 40px;
          font-size: 1.2rem;
          color: #667eea;
        }

        .book-card {
          width: 388px;
          padding: 20px;
          border: 2px solid #f0f0f0;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .book-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(102, 126, 234, 0.15);
          border-color: #667eea;
        }

        .book-card h4 {
          color: #2d3748;
          font-size: 1.1rem;
          margin-bottom: 12px;
          font-weight: 700;
          line-height: 1.4;
        }

        .book-card p {
          font-size: 0.9rem;
          color: #718096;
          margin-bottom: 8px;
          line-height: 1.5;
        }

        .book-image {
          width: 100%;
          height: 280px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }
          
          .hero-content p {
            font-size: 1rem;
          }

          .book-card {
            width: 180px;
          }
        }
      `}</style>

      <main>
        <section className="hero-section">
          <Container style={{ width: '1240px', maxWidth: '100%' }}>
            <Flex
              justify="space-between"
              align="center"
              style={{ minHeight: '400px' }}
              gap="40px">
              <div className="hero-content" style={{ width: '500px' }}>
                <h1>
                  <span style={{ color: '#FFD93D' }}>"Mutolaa"</span> - eng sara
                  audio va elektron kitoblar!
                </h1>
                <p>
                  O'zbek tilidagi eng yirik mobil kutubxonani hoziroq yuklab
                  oling!
                </p>
                <Flex gap="20px" style={{ marginTop: '30px' }} wrap="wrap">
                  <div className="download-btn">
                    <p>Yuklab Olish</p>
                    <b>App Store</b>
                  </div>
                  <div className="download-btn">
                    <p>Yuklab Olish</p>
                    <b>Google Play</b>
                  </div>
                  <div className="download-btn">
                    <p>Yuklab Olish</p>
                    <b>App Gallery</b>
                  </div>
                </Flex>
              </div>
              <div className="video-container">
                <iframe
                  style={{ borderRadius: '20px', display: 'block' }}
                  width="530"
                  height="300"
                  src="https://www.youtube.com/embed/ZrhFhSap5HE"
                  title="Mutolaa | Animatsion rolik"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen></iframe>
              </div>
            </Flex>
          </Container>
        </section>

        <section className="books-section">
          <Container style={{ width: '1240px', maxWidth: '100%' }}>
            <Flex>
              <div style={{ width: '100%' }}>
                <Flex
                  justify="space-between"
                  align="center"
                  className="section-header">
                  <h2>Eng ko'p o'qilgan kitoblar</h2>
                  <h4
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Yana 6 ta ko‘rsatish' : "Hammasini ko'rish →"}
                  </h4>
                </Flex>
              </div>
            </Flex>
            {loading ? (
              <p className="loading-text">Yuklanmoqda...</p>
            ) : (
              <Flex gap="20px" wrap="wrap" style={{ marginTop: '30px' }}>
                {displayedBooks?.map((book) => (
                  <div key={book.id} className="book-card" cursor="pointer">
                    <div
                      className="book-image"
                      onClick={() => detail(`detail/${book.id}`)}>
                      📚
                    </div>
                    <h4>Nomi: {book.name}</h4>
                    <p style={{ fontSize: '14px', color: 'gray' }}>
                      Yozuvchi: {book.author}
                    </p>
                    <p style={{ fontSize: '14px', color: 'gray' }}>
                      Nashiryot: {book.publisher}
                    </p>
                    <p style={{ fontSize: '14px', color: 'gray' }}>
                      Kutubxonadagi soni: {book.quantity_in_library} ta
                    </p>
                    {isAuth && (
                      <Button onClick={() => handleDelete(book.id)}>
                        O'chirish
                      </Button>
                    )}
                  </div>
                ))}
              </Flex>
            )}
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;
