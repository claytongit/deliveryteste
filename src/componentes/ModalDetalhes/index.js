import React, { useState, useEffect } from 'react';
import { BiMinus, BiPlus } from "react-icons/bi";
import { Container } from './style';
import { useParams, Link } from 'react-router-dom';
import api from './../../services/api';

export default function ModalDetalhes(){

    const { titulo, preco, id, pro, cpf, tam, pack, nome } = useParams();
    const [ dados, setDados ]                              = useState([]);
    const [ checkedItems, setCheckedItems ]                = useState({});
    const [ qtd, setQtd ]                                  = useState(1);
    const [ tamanho, setTamanho ]                          = useState(false);
    const [ pizza, setPizza ]                              = useState([]);
    const [ select, setSelect ]                            = useState(1);
    const [ checks, setChecks ]                            = useState('');

    const img = `http://vennder.com.br/administrativo/upload/${cpf}/${pro}.png`;

    const handlePlusQtd = () => {
        setQtd(qtd + 1);
    }

    const handleMinusQtd = () => {
        if(qtd < 2){
            return false;
        }
        setQtd(qtd - 1);
    }    

    const handleChange = (event) => {
        setCheckedItems({...checkedItems, [event.target.name]: event.target.checked});
    }

    const handleSabores = (event) => {
        setChecks({...checks, [event.target.name]: event.target.checked});
    }

    useEffect(()=>{
        async function CarregarDados(){
            const res = await api.get(`/ac/${id}`);
            setDados(res.data);
        }

        async function CarregarPizza(){
            const res = await api.get(`/produtos/${id}`);
            setPizza(res.data.produtos);
        }

        if(tam === '2'){
            setTamanho(true);
        }else{
            setTamanho(false);
        }

        CarregarDados();
        CarregarPizza();

    },[checkedItems, id, tam]);

    var checkBoxes = document.querySelectorAll("#saborPizza");
    var selecionados = 0;

    checkBoxes.forEach(function(el) {
        
        if(el.checked) {
            selecionados++;
            document.querySelectorAll("#saborPizza").checked = false;
        }
    
    });

    switch (select) {
        case '1':
            if(parseInt(select) === selecionados){
                document.getElementById('saborPizza').setAttribute("disabled", "");
            }

            if(parseInt(select) !== selecionados){
                document.getElementById('saborPizza').removeAttribute("disabled", "");
            }
            
            break;

        case '2':
            if(parseInt(select) === selecionados){
                document.getElementById('saborPizza').setAttribute("disabled", "");
            }

            if(parseInt(select) !== selecionados){
                document.getElementById('saborPizza').removeAttribute("disabled", "");                
            }

            break;
        
        case '3':
            if(parseInt(select) === selecionados){
                document.getElementById('saborPizza').setAttribute("disabled", "");
            }

            if(parseInt(select) !== selecionados){
                document.getElementById('saborPizza').removeAttribute("disabled", "");
            }

            break;

        case '4':
            if(parseInt(select) === selecionados){
                document.getElementById('saborPizza').setAttribute("disabled", "");
            }

            if(parseInt(select) !== selecionados){
                document.getElementById('saborPizza').removeAttribute("disabled", "");
            }

            break;
    
        default:
            break;
    }  

    return(
        <Container>
            <div>
                <div className="cabecalho" style={{backgroundImage: `url(${img})`}}></div> 
                <div className="content">
                    <h2>{titulo}</h2>
                    <div>
                        {
                            tamanho ? 
                                <>
                                    <h3>Quantidade de sabores</h3> 
                                    <div className="adicionais-content">
                                        <select name="fracionamento" id="fracionamento" onChange={ e => setSelect(e.target.value) }>
                                            <option value="1" >Inteira</option>
                                            <option value="2" >1/2</option>
                                            <option value="3" >1/3</option>
                                            <option value="4" >1/4</option>
                                        </select> 

                                        <h3>Escolha até {select} sabores</h3>

                                        {  
                                            pizza.map(p => (
                                                <p key={p.ID} ><input
                                                    type="checkbox" 
                                                    name={p.NOME} 
                                                    id="saborPizza"
                                                    onChange={handleSabores}
                                                    /> {p.NOME}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </>
                                : ''
                        }
                        <h3>Adicionais</h3>
                        <div className="adicionais">
                            <div className="adicionais-content">
                                {
                                    dados.map(d => (
                                        <p key={d.ID}><input 
                                            type="checkbox" 
                                            name={d.NOME} 
                                            id={d.ID}
                                            onChange={handleChange}
                                            /> {d.NOME} - {d.CUSTO.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="quantidade">
                        <h3 className="title">Informe a quantidade desse mesmo produto</h3>
                        <div>
                            <div className="btnQtd" onClick={handleMinusQtd} ><BiMinus color="#FFF" size="25" /></div>
                            <div className="textQtd">{qtd}</div>
                            <div className="btnQtd" onClick={handlePlusQtd} ><BiPlus color="#FFF" size="25" /></div>
                        </div>
                    </div>
                    <div className="btnpedir">
                        <Link to={`/pedido/${titulo}/${preco}/${JSON.stringify(checkedItems)}/${qtd}/${cpf}/${id}/${JSON.stringify(checks)}/${pack}/${nome}`} >Gravar produto</Link>
                    </div>
                </div>
            </div> 
        </Container>
    );
}