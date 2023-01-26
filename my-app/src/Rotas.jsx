import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Produto from './Produto';

class Rotas extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Produto/>} />
                </Routes>
            </BrowserRouter>
        )
    }

} export default Rotas;