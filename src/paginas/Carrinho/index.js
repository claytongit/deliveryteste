import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from './../../services/api';

import { Container } from './style';

export default function Carrinho (){

    const { titulo, preco, sub, qtd, cpf, id, sab, pack, nome } = useParams();
    const [ subs, setSubs ]                    = useState([]);
    const [ json, setJson ]                    = useState([]);
    const [ valorSub, setValorSub ]            = useState(0);

    const history = useHistory();

    let data = {
        "Nome": titulo,
        "PreçoDeProduto": preco,
        "QuantidadeDeProduto": qtd,
        "SubProduto": json,
        "SaboresPizza": JSON.parse(sab),
        "Total": parseInt(preco) + valorSub,
        "idCat": id,
        "Package": pack
    }

    useEffect(()=>{
        async function LoadSubs(){
            const res = await api.get('/ac');
            setSubs(res.data);
        }
        LoadSubs();
        setJson(JSON.parse(sub));

        subs.forEach(element => {
            if(json[element.NOME]){
                setValorSub(element.CUSTO)
            }
        });
    }, []);

    console.log(cpf);

    setTimeout(() => {
        history.push(`/${nome}`);
        localStorage.setItem('@data', JSON.stringify(data));
        // localStorage.clear();
    }, 800);

    return(
        <Container>
            <p>Gravando itens no carrinho...</p>
        </Container>            
    )
}