import { Button, Container, Input } from '@mantine/core';
import { BooksAPI } from '../centerAPI/APIs';
import { useState, useRef } from 'react';
import * as XLSX from 'xlsx';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [quantity, setQuantity] = useState('');

  const [bookList, setBookList] = useState([]);
  const fileRef = useRef(null);

  const handleExcelUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      const formattedData = jsonData.map((item) => ({
        name: item.name,
        author: item.author,
        publisher: item.publisher,
        quantity_in_library: Number(item.quantity_in_library),
      }));

      const res = await BooksAPI.post('/books/add-books/', formattedData);

      alert('Exceldan kitoblar muvaffaqiyatli qo‘shildi!');
      console.log(res.data);

      fileRef.current.value = '';
    } catch (err) {
      console.error(err);
      alert('Excel yuklashda xatolik: ' + JSON.stringify(err.response?.data));
    }
  };

  const addToList = () => {
    if (!name || !author || !publisher || !quantity) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }

    const newBook = {
      name,
      author,
      publisher,
      quantity_in_library: Number(quantity),
    };

    setBookList([...bookList, newBook]);

    setName('');
    setAuthor('');
    setPublisher('');
    setQuantity('');
  };

  const submitAllBooks = async () => {
    if (bookList.length === 0) {
      alert("Avval kitob qo'shing!");
      return;
    }

    try {
      const res = await BooksAPI.post('/books/add-books/', bookList);
      alert('Bir nechta kitob muvaffaqiyatli qo‘shildi!');
      console.log(res.data);

      setBookList([]);
      setName('');
      setAuthor('');
      setPublisher('');
      setQuantity('');
    } catch (err) {
      alert('Xatolik: ' + JSON.stringify(err.response?.data));
      console.error(err);
    }
  };

  const handleSubmitSingle = async (e) => {
    e.preventDefault();

    const newBook = [
      {
        name,
        author,
        publisher,
        quantity_in_library: Number(quantity),
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
      alert('Xatolik: ' + JSON.stringify(err.response?.data));
      console.error(err);
    }
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmitSingle}
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
          placeholder="Nashriyot"
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

        <Button type="submit">1 ta Kitobni Darhol Qo‘shish</Button>

        <Button onClick={addToList} color="yellow">
          Listga Qo‘shish (Saqlab borish)
        </Button>

        <Button onClick={submitAllBooks} color="green">
          Yig‘ilgan Hamma Kitobni Qo‘shish
        </Button>

        <hr />

        <Input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleExcelUpload}
          ref={fileRef}
        />
        <p style={{ fontSize: '14px', opacity: 0.7 }}>
          Excel yuklab birdaniga ko‘p kitob qo‘shish mumkin
        </p>

        {bookList.length > 0 && (
          <p style={{ fontSize: '14px', color: 'blue' }}>
            Yig‘ilgan kitoblar soni: {bookList.length} ta
          </p>
        )}
      </form>
    </Container>
  );
};

export default AddBook;
