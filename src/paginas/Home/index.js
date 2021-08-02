import React from 'react';

import { Container } from './style';

import Header from '../../componentes/Cabecalho';
import ListadeProdutos from '../../componentes/ListadeProdutos';

export default function Home(){
    return(
        <Container>
            <Header />
            <ListadeProdutos />
        </Container>
    )
}