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
      alert("Exceldan kitoblar muvaffaqiyatli qo'shildi!");
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
      alert("Bir nechta kitob muvaffaqiyatli qo'shildi!");
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
    <>
      <style>{`
        .add-book-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          padding: 60px 20px;
        }

        .add-book-form {
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

        .form-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: #FFC107;
          margin-bottom: 20px;
          text-shadow: 0 2px 10px rgba(255, 193, 7, 0.3);
        }

        .mantine-Input-input {
          background: #1a1a1a !important;
          border: 2px solid rgba(255, 193, 7, 0.3) !important;
          color: white !important;
          padding: 12px 16px !important;
          border-radius: 10px !important;
          font-size: 1rem !important;
          transition: all 0.3s ease !important;
        }

        .mantine-Input-input:focus {
          border-color: #FFC107 !important;
          box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2) !important;
        }

        .mantine-Input-input::placeholder {
          color: rgba(255, 255, 255, 0.4) !important;
        }

        .mantine-Button-root {
          background: linear-gradient(135deg, #FFC107 0%, #FFD54F 100%) !important;
          color: #1a1a1a !important;
          font-weight: 700 !important;
          padding: 12px 24px !important;
          border-radius: 10px !important;
          transition: all 0.3s ease !important;
          border: none !important;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3) !important;
        }

        .mantine-Button-root:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(255, 193, 7, 0.5) !important;
        }

        .btn-yellow {
          background: linear-gradient(135deg, #FFD54F 0%, #FFC107 100%) !important;
        }

        .btn-green {
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%) !important;
          color: white !important;
        }

        .divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #FFC107, transparent);
          margin: 20px 0;
        }

        .file-upload-section {
          padding: 20px;
          background: rgba(255, 193, 7, 0.1);
          border-radius: 10px;
          border: 2px dashed rgba(255, 193, 7, 0.3);
        }

        .upload-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 10px;
          text-align: center;
        }

        .book-count {
          font-size: 0.95rem;
          color: #FFC107;
          text-align: center;
          font-weight: 600;
          padding: 10px;
          background: rgba(255, 193, 7, 0.1);
          border-radius: 8px;
        }
      `}</style>

      <div className="add-book-page">
        <Container>
          <form onSubmit={handleSubmitSingle} className="add-book-form">
            <h1 className="form-title">Kitob Qo'shish</h1>

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

            <Button type="submit">1 ta Kitobni Darhol Qo'shish</Button>
            <Button onClick={addToList} className="btn-yellow">
              Listga Qo'shish (Saqlab borish)
            </Button>
            <Button onClick={submitAllBooks} className="btn-green">
              Yig'ilgan Hamma Kitobni Qo'shish
            </Button>

            <div className="divider"></div>

            <div className="file-upload-section">
              <Input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleExcelUpload}
                ref={fileRef}
              />
              <p className="upload-label">
                Excel yuklab birdaniga ko'p kitob qo'shish mumkin
              </p>
            </div>

            {bookList.length > 0 && (
              <div className="book-count">
                Yig'ilgan kitoblar soni: {bookList.length} ta
              </div>
            )}
          </form>
        </Container>
      </div>
    </>
  );
};

export default AddBook;
