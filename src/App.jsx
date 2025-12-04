import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import LIbaries from './pages/LIbaries';
import Login from './pages/Login';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
