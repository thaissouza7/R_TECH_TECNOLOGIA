import React from "react";
import Titulo from "../../titulo/Titulo";
import './home.css'
import{ Link } from 'react-router-dom'
import office from '../../imagens/office.jpg'

function Home (){
    return(
        <div>

      <div class="imgg"> <Link to="/produtos"><button class="botao" >COMPRE AGORA!</button></Link></div>
      <div>
      <button >Compre agora!</button>
      <h1>Sobre Nós</h1>
      <p>bla bla bla bla</p>
      <h1>Por que nos escolher?</h1>
      <img src={office} ></img>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      </div>


    </div>
    )
}
export default Home;
