import React from 'react';
import email from '../../img/email.png';
import telefone from '../../img/telefone.png';
import './contato.css'

class Contato extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className ="mestreContato">
                <div className="paiContato">
                    <div className='textos'>
                    <input type="text"placeholder='nome' className='nome' id="idpName"></input>
                    <input type="email"placeholder='Email' className='nome' id="idpEmail"></input>
                    <input type="text"placeholder='Envie sua mensagem' className='nome' id="idpText"></input>
                    </div>
                   
                    <div className='emaildiv'>
                        <h1 className='mensagem'>mande uma mensagem</h1>
                        <p className='testoMensagem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat illum? Omnis dolore facere nisi qui exercitationem, eligendi magni debitis libero enim, placeat non quos ea quam magnam aliquid iusto!</p>
                        <img src={email} id="emailid"/>
                        <h3 id="titulo">Envie-me:</h3>
                        <h2 id="idmail">R-tech@gmail.com</h2>
                        <img src={telefone} id="emailid"/>
                        <h3 id="titulo2">Ligue para mim:</h3>
                        <h2 id="telefoneid">(21) 2114-4444</h2>
                    </div>
                </div>
                
           
            </div>
        )
    }
}
export default Contato 