import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './paginas/Home';
import Carrinho from './paginas/Carrinho';
import Finalizar from './paginas/Finalizar';

import Adicionais from './componentes/ModalDetalhes';
import ModalForm from './componentes/ModalForm';


export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/:nome" component={Home} />
                <Route path="/adicionais/:titulo/:preco/:id/:pro/:cpf/:tam/:pack/:nome" component={Adicionais} />
                <Route path="/finalizar/:id/:cpf"  component={ModalForm} />

                <Route path="/pedido/:titulo/:preco/:sub/:qtd/:cpf/:id/:sab/:pack/:nome"  component={Carrinho} />
                <Route path="/FinalizarPedido/:id/:cpf" component={Finalizar} />
            </Switch>
        </BrowserRouter>
    );
}