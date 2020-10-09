import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Produto from './Components/Produto';
import Contato from './Components/Contato';
import Error404 from './Components/Error404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/ranek" element={<Produtos />} />
            <Route path="ranek/produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
