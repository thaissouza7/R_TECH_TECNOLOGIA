import React from 'react'


class Contato extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className ="contato">
                <div className="caixaProduct">
            <img src={this.imgProduct} alt="" className="imgProduct"/>
            <h4 className="tituloProduct">{this.titulo}</h4>
            <p className="descriptionProduct">{this.description}</p>
            <button className="btnComprar">nome</button>
        </div>
        </div>
        )
    }
}
export default Contato 