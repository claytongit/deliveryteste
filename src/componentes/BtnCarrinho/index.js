import React from 'react';
import { Link } from 'react-router-dom';

import './btnCarrinho.css';

export default function BtnCarrinho({id, cpf}){
    return(
        <div className="btnCarrinho">
            <Link to={`/finalizar/${id}/${cpf}`}>
                Fechar a compra 
            </Link>
        </div>
    )
}