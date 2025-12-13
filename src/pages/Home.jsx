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
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          padding: 60px 0;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 193, 7, 0.15) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
          color: white;
        }

        .hero-content .highlight {
          color: #FFC107;
          text-shadow: 0 0 30px rgba(255, 193, 7, 0.5);
        }

        .hero-content p {
          font-size: 1.2rem;
          opacity: 0.95;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }

        .download-btn {
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          color: #1a1a1a;
          padding: 15px 25px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
          border: none;
        }

        .download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 193, 7, 0.5);
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
          box-shadow: 0 10px 40px rgba(255, 193, 7, 0.3);
          transition: transform 0.3s ease;
          border: 2px solid rgba(255, 193, 7, 0.3);
          position: relative;
          z-index: 1;
        }

        .video-container:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 50px rgba(255, 193, 7, 0.4);
        }

        .books-section {
          background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
          padding: 60px 0;
          margin-top: 40px;
          border-radius: 30px 30px 0 0;
          position: relative;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #FFC107;
          text-shadow: 0 2px 10px rgba(255, 193, 7, 0.3);
        }

        .section-header h4 {
          color: #FFC107;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .section-header h4:hover {
          color: #FFD54F;
          transform: translateX(5px);
        }

        .loading-text {
          text-align: center;
          padding: 40px;
          font-size: 1.2rem;
          color: #FFC107;
        }

        .book-card {
          width: 388px;
          padding: 20px;
          border: 2px solid rgba(255, 193, 7, 0.2);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: #2d2d2d;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .book-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(255, 193, 7, 0.4);
          border-color: #FFC107;
        }

        .book-card h4 {
          color: #FFC107;
          font-size: 1.1rem;
          margin-bottom: 12px;
          font-weight: 700;
          line-height: 1.4;
        }

        .book-card p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 8px;
          line-height: 1.5;
        }

        .book-image {
          width: 100%;
          height: 280px;
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%);
          border-radius: 12px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
          transition: all 0.3s ease;
        }

        .book-image:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 20px rgba(255, 193, 7, 0.5);
        }

        .delete-btn {
          background: #dc2626 !important;
          transition: all 0.3s ease;
        }

        .delete-btn:hover {
          background: #b91c1c !important;
          transform: translateY(-2px);
        }

        .edit-btn {
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%) !important;
          color: #1a1a1a !important;
          transition: all 0.3s ease;
        }

        .edit-btn:hover {
          background: linear-gradient(135deg, #FFD54F 0%, #FFC107 100%) !important;
          transform: translateY(-2px);
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

          .video-container iframe {
            width: 100%;
            height: 200px;
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
                  <span className="highlight">"Mutolaa"</span> - eng sara
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
                    {showAll ? 'Yana 6 ta ko\'rsatish' : "Hammasini ko'rish →"}
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
                    <p style={{ fontSize: '14px' }}>
                      Yozuvchi: {book.author}
                    </p>
                    <p style={{ fontSize: '14px' }}>
                      Nashiryot: {book.publisher}
                    </p>
                    <p style={{ fontSize: '14px' }}>
                      Kutubxonadagi soni: {book.quantity_in_library} ta
                    </p>
                    {isAuth && (
                      <div
                        style={{
                          display: 'flex',
                          gap: '10px',
                          marginTop: '10px',
                        }}>
                        <Button
                          className="delete-btn"
                          onClick={() => handleDelete(book.id)}>
                          O'chirish
                        </Button>
                        <Button
                          className="edit-btn"
                          onClick={() => detail(`/update-book/${book.id}`)}>
                          Tahrirlash
                        </Button>
                      </div>
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