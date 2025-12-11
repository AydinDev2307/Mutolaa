import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import LIbaries from './pages/LIbaries';
import Login from './pages/Login';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './pages/Detail';
import DetailLibraries from './pages/DetailLibraries';
import AddBook from './pages/AddBook';
import LoginCenter from './pages/LoginCenter';
import UpdateBook from './pages/UpdateBook';
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/about" element={<About />} />
          <Route path="/libraries" element={<LIbaries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/akkaunt" element={<LoginCenter />} />
          <Route path="/detailLibraries/:id" element={<DetailLibraries />} />
          <Route path="/update-book/:id" element={<UpdateBook />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
