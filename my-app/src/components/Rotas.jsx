import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"

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