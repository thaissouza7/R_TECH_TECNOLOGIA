import React from 'react'
import {
    BrowserRouter,
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Produto from './components/pages/produto/Produto';
import Contatos from './components/pages/contatos/Contatos';

function Rotas() {
    return (
        <BrowserRouter>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Produto />} />
                    <Route exact path="/contatos" element={<Contatos />} />
                </Routes>
            </Router>
        </BrowserRouter>
    )
}
export default Rotas;