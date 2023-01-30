// arquivos gerados automáticamente através do comando 'npx create-react-app my-app'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Produto from './components/pages/produto/Produto';
import reportWebVitals from './reportWebVitals';

 //importando as classes do react router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
