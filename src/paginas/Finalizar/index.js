import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {Container} from './style';

export default function Finalizar(){
    const history = useHistory();
    const { id, cpf } = useParams();

    setTimeout(() => {
        history.push(`/loja/${cpf}`);
        console.log([id, cpf])
    }, 6000)

    return(
        <Container>
            <p>Seu pedido foi finalizado com sucesso...</p>
        </Container>
    )
}