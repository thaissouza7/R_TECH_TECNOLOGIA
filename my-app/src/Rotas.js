import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/home/Home';
import Produtos from "./components/pages/produto/Produtos";
import Sobre from "./components/pages/sobre/Sobre"
import Contatos from "./components/pages/contatos/Contatos"

function Rotas (){
 
 return <Switch>
            <Route exact path="/">

                <Home />
            </Route>

            <Route exact path="/produtos">
                <Produtos />
            </Route>

            <Route exact path="/sobre">

                <Sobre />
            </Route>
            <Route exact path="/contatos">

                <Contatos />
            </Route>
        </Switch>

}
export default Rotas;