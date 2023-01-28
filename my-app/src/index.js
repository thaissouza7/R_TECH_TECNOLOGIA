// arquivos gerados automáticamente através do comando 'npx create-react-app my-app'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Produto from './components/Produto';
import reportWebVitals from './reportWebVitals';
import Mouse1 from './img/Mouse1.png';
import Mouse2 from './img/Mouse2.png';
import Mouse3 from './img/Mouse3.png';
// arquivos gerados automáticamente através do comando 'npx create-react-app my-app'

import Template from './components/Template';
import { BrowserRouter, Routes, Switch } from 'react-router-dom'; //importando as classes do react router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter>
  <Produto 
  imgProduct = {Mouse1} 
  titulo = 'MOUSE REACT' 
  description = 'Indicado para jogadores exigentes, o Perdition 3 traz o sensor Pixart PMW 3327, considerado um dos melhores do mercado' />
  <Produto 
  imgProduct = {Mouse2} 
  titulo = 'MOUSE REACT' 
  description = 'Indicado para jogadores exigentes, o Perdition 3 traz o sensor Pixart PMW 3327, considerado um dos melhores do mercado' />
  <Produto 
  imgProduct = {Mouse3} 
  titulo = 'MOUSE REACT' 
  description = 'Indicado para jogadores exigentes, o Perdition 3 traz o sensor Pixart PMW 3327, considerado um dos melhores do mercado' />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
