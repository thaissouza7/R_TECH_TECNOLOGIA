import React from 'react'
import '../css/nav.css'
class Nav extends React.Component {
    constructor(props) {
        super(props)
    }
render(){
    return <div>
         <nav id="nav">
        <ul>
            <a href="cardapio.html">PRODUTOS</a>
            <a href="cardapio.html">SOBRE NÓS</a>
            <a href="contato.html">CONTATOS</a>
        </ul>
    </nav>
       </div>
    }
}

export default Nav