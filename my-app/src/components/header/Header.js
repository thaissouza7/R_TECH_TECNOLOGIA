import React from 'react'
import './header.css'
import compras from '../img/compras.png'
import pesquisa from '../img/pesquisa.png'
import perfil from '../img/perfil.png'
import logoMarca from '../img/LogoMarca.png'

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