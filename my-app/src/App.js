import React from "react";
import { BrowserRouter } from 'react-router-dom';
import "../src/App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Footer2 from "./components/footer2/Footer2"
import Rotas from "./Rotas";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Nav/>
        <Rotas />
        <Footer />
        <Footer2/>
      </BrowserRouter>

  );
}

export default App;