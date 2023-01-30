import React from 'react'
import './footer.css'
import LogoMarca2 from '../imagens/LogoMarca2.png'

function Footer() {
    return <div>
        <footer>
            <div class="logoFooter">

                <img src={LogoMarca2} alt="" />

            </div>
            <div>
                <ul class="text1">
                    <a href="quemsomos.html">QUEM SOMOS</a>
                    <a href="cardapio.html">PRODUTOS</a>
                    <a href="contato.html">CONTATOS</a><br></br>
                    <a href="https://www.gupy.io/" target="_blank">TRABALHE CONOSCO</a>
                    <a href="politicaprivacidade.html">POLITICA DE PRIVACIDADE</a>
                </ul>
            </div>
            <br></br>
            <div class="grupo">
                <p><a href="https://www.linkedin.com/in/eduardo-marques-a08770249/" target="_blank">CAMILA</a> | <a href="https://www.linkedin.com/in/moniquemoura/" target="_blank">EDUARDO</a> | <a href="https://www.linkedin.com/in/monyck-vieira-905767249/" target="_blank">LUCIANO</a> | <a href="https://www.linkedin.com/in/thais-souza7/" target="_blank">RAFAEL</a> | <a href="https://www.linkedin.com/in/thais-souza7/" target="_blank">THAIS</a> </p>
            </div>

        </footer>

    </div>

} export default Footer