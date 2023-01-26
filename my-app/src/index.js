// arquivos gerados automáticamente através do comando 'npx create-react-app my-app'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rotas from './components/Rotas'

import reportWebVitals from './reportWebVitals';
// arquivos gerados automáticamente através do comando 'npx create-react-app my-app'

import Template from './components/Template';
import { BrowserRouter, Routes, Switch } from 'react-router-dom'; //importando as classes do react router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter>
  <Template />
  <Rotas />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
