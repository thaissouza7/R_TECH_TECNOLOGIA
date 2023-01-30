import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Rotas from './Rotas';
import Footer from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
} export default App;
