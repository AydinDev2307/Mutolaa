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
    <Container>
      <form
        onSubmit={handleUpdate}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          maxWidth: '400px',
          margin: '50px auto',
        }}>
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
  );
};

export default UpdateBook;
