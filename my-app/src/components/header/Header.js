import React from 'react'
import './header.css'
import compras from '../imagens/compras.png'
import pesquisa from '../imagens/pesquisa.png'
import perfil from '../imagens/perfil.png'
import logoMarca from '../imagens/LogoMarca.png'

function Header() {
    return <div class="header">
            <img class="logo" src={logoMarca} alt="" />
            <div class="textBox">
                <input type="text" placeholder=' Pesquise' />
                <button type="submit">
                    <img src={pesquisa} alt="desenho linear de uma lupa" />
                </button>
            </div>
            <div class="cadastro">
                <img src={perfil} alt="" />
                <p> <strong>Entre</strong> ou <strong>cadastre-se</strong>
                </p>
            </div>

            <img src={compras} alt="" />
        </div>
} export default Header