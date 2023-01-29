// arquivos gerados automáticamente através do comando 'npx create-react-app my-app'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Produto from './components/Produto';
import reportWebVitals from './reportWebVitals';
import Mouse1 from './img/Mouse1.png';
import Mouse2 from './img/Mouse2.png';
import Mouse3 from './img/Mouse3.png';
import Headset1 from './img/Headset1.png';
import Headset2 from './img/Headset2.png';
import Headset3 from './img/Headset3.png';
import Hardware1 from './img/Hardware1.png';
import Hardware2 from './img/Hardware2.png';
import Hardware3 from './img/Hardware3.png';
import Lupus from './img/Lupus.png';
import Rufus from './img/Rufus.png';
import Simensis from './img/Simensis.png';
// arquivos gerados automáticamente através do comando 'npx create-react-app my-app'

import Template from './components/Template';
import { BrowserRouter, Routes, Switch } from 'react-router-dom'; //importando as classes do react router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter>
  <Produto 
  imgProduct = {Mouse1} 
  titulo = 'MOUSE OMENARE' 
  description = 'MOUSE OMENARE Logitech G403 HERO com RGB LIGHTSYNC e Sensor HERO 25K - 910-005631'   
  price = 'R$ 310,99'/>
  <Produto 
  imgProduct = {Mouse2} 
  titulo = 'MOUSE IMPERAVI' 
  description = 'MOUSE IMPERAVI Deathadder V2 Chroma, Optical Switch, 20000 DPI' 
  price='R$ 279,99'/>
  <Produto 
  imgProduct = {Mouse3} 
  titulo = 'MOUSE EMULARI' 
  description = 'MOUSE EMULARI Cobra, Chroma RGB, 12400DPI' 
  price ='R$ 256,99'/>
  <Produto 
  imgProduct = {Headset1} 
  titulo = 'HEADSET AMENO' 
  description = 'HEADSET AMENO ZEUS X RGB USB 7.1 Surround Sound Virtual H510-RGB,'   
  price = 'R$ 380,00'/>
  <Produto 
  imgProduct = {Headset2} 
  titulo = 'HEADSET DORIME' 
  description = 'MOUSE DORIME Preto e Vermelho P2 Com Microfone PC e Consoles PS4 / Xbox- H510' 
  price='R$ 409,00'/>
  <Produto 
  imgProduct = {Headset3} 
  titulo = 'HEADSET MATIREMO' 
  description = 'HEADSET MATIREMO Sakura Edition 7.1 P2 Com Microfone PC e Consoles PS4 / Xbox- H510' 
  price ='R$ 256,99'/>
  <Produto 
  imgProduct = {Hardware1} 
  titulo = 'FONTE MAXIMUS' 
  description = 'FONTE MAXIMUS Pylon, 650W, 80 Plus Bronze - PYLON650B-BKCBR'   
  price = 'R$ 380,00'/>
  <Produto 
  imgProduct = {Hardware2} 
  titulo = 'SSD IMPERATOR' 
  description = 'SSD IMPERATOR 128 GB Husky Gaming, 2.5", SATA III, Leitura: 570MB/s e Gravação: 500MB/s, Preto - HGML000' 
  price='R$ 409,00'/>
  <Produto 
  imgProduct = {Hardware3} 
  titulo = 'COOLER ANIMUS' 
  description = 'Cooler Fan Rise Mode, 120mm, Preto - RM-BK-01-FB' 
  price ='R$ 256,99'/>
   <Produto 
  imgProduct = {Lupus} 
  titulo = 'PC LUPUS' 
  description = 'PC LUPUS Concórdia Intel Core i7-12700F, 16GB DDR4, GeForce RTX 3070, SSD 1TB NVMe'   
  price = 'R$ 380,00'/>
  <Produto 
  imgProduct = {Rufus} 
  titulo = 'PC RUFUS' 
  description = 'PC RUFUS Intel Core I7-11700F, RGB, GeForce RTX 3060, 16GB, SSD 240GB - G19482-138625' 
  price='R$ 409,00'/>
  <Produto 
  imgProduct = {Simensis} 
  titulo = 'PC SIMENSIS' 
  description = 'PC SIMENSIS 7000 - I7 6700 3.4ghz 8GB DDR4 SSD 240GB Rx 550 4GB Fonte 500w' 
  price ='R$ 256,99'/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
