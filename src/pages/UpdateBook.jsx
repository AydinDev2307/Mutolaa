import { Button, Container, Input } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BooksAPI } from '../centerAPI/APIs';
import authStore from '../store/authStore';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
  const home = useNavigate();
  const { id } = useParams();
  const { access } = authStore();
  const [book, setBook] = useState({
    name: '',
    author: '',
    publisher: '',
    quantity_in_library: '',
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await BooksAPI.get(`/books/book/${id}/`);
        setBook(res.data);
      } catch (e) {
        console.error(e);
        alert('Kitobni yuklashda xatolik!');
      }
    };
    fetchBook();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await BooksAPI.put(
        `/books/book/${id}/`,
        {
          name: book.name,
          author: book.author,
          publisher: book.publisher,
          quantity_in_library: Number(book.quantity_in_library),
        },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
      alert('Kitob muvaffaqiyatli yangilandi!');
      console.log(res.data);
      home('/');
    } catch (err) {
      console.error(err);
      alert(
        'Yangilashda xatolik: ' + (err.response?.data?.detail || err.message)
      );
    }
  };

  return (
    <>
      <style>{`
        .update-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          padding: 60px 20px;
        }

        .update-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 500px;
          margin: 0 auto;
          background: #2d2d2d;
          padding: 40px;
          border-radius: 20px;
          border: 2px solid rgba(255, 193, 7, 0.2);
          box-shadow: 0 10px 30px rgba(255, 193, 7, 0.2);
        }

        .update-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: #FFC107;
          margin-bottom: 20px;
          text-shadow: 0 2px 10px rgba(255, 193, 7, 0.3);
        }
      `}</style>

      <div className="update-page">
        <Container>
          <form onSubmit={handleUpdate} className="update-form">
            <h1 className="update-title">Kitobni Yangilash</h1>

            <Input
              placeholder="Kitob nomi"
              value={book.name}
              onChange={(e) => setBook({ ...book, name: e.target.value })}
            />
            <Input
              placeholder="Muallif"
              value={book.author}
              onChange={(e) => setBook({ ...book, author: e.target.value })}
            />
            <Input
              placeholder="Nashriyot"
              value={book.publisher}
              onChange={(e) => setBook({ ...book, publisher: e.target.value })}
            />
            <Input
              placeholder="Kitoblar soni"
              type="number"
              value={book.quantity_in_library}
              onChange={(e) =>
                setBook({ ...book, quantity_in_library: e.target.value })
              }
            />
            <Button type="submit">Kitobni yangilash</Button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default UpdateBook;
