import { Button, Container, Input } from '@mantine/core';
import { BooksAPI } from '../centerAPI/APIs';
import { useState } from 'react';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = [
      {
        name,
        author,
        publisher,
        quantity_in_library: parseInt(quantity),
      },
    ];

    try {
      const res = await BooksAPI.post('/books/add-books/', newBook);
      alert("Kitob muvaffaqiyatli qo'shildi!");
      console.log(res.data);

      setName('');
      setAuthor('');
      setPublisher('');
      setQuantity('');
    } catch (err) {
      console.error(err);
      alert('Xatolik: ' + JSON.stringify(err.response?.data));
    }
  };

  return (
    <>
      <Container>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '400px',
            margin: '50px auto',
          }}>
          <Input
            placeholder="Kitob nomi"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Muallif"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <Input
            placeholder="Nashryot"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            required
          />
          <Input
            placeholder="Kitoblar soni"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <Button type="submit">Kitob qo'shish</Button>
        </form>
      </Container>
    </>
  );
};

export default AddBook;
