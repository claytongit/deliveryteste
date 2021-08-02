import React, { useState, useEffect } from 'react';
import { Container, Pesquisa, Lista } from './style';
import { Link, useParams } from 'react-router-dom';
import api from './../../services/api';

import BtnCarrinho from './../BtnCarrinho';

export default function ListadeProdutos(){

    const [ categorias, setCategorias ] = useState([]);
    const [ produtos, setProdutos ]     = useState([]);
    const { nome }                      = useParams();
    const [ id, setId ]                 = useState([]);
    const [filter, setFilterParam]      = useState('');
    
    useEffect(()=>{
        async function loadData(){
            const cat = await api.get(`/categoria/${id}`);
            setCategorias(cat.data);

            const pro = await api.get(`/produto/${id}`);
            setProdutos(pro.data);
        }       

        async function carregarUsuario(){
            const usuario = await api.get(`/user/${nome}`);
            const idUser = usuario.data[0].CPF;
            setId(idUser.toString());         
        }

        function handleLink(){
            window.location.href = filter;
        }

        carregarUsuario();
        loadData();
        
    },[id, nome, filter])

    const jsonStorage = JSON.parse(localStorage.getItem('@data'));

    return(
        <Container>
            <Pesquisa>
                <h3>Pesquisar categoria</h3>
                <div>
                    <select name="search" id="search" >  
                    {
                        categorias.map(r => (
                            <option key={r.ID} value={'#'+r.NOME}>{r.NOME}</option>
                        )) 
                    }                       
                    </select>                   
                </div>
            </Pesquisa>
            {
                localStorage.getItem('@data') ? <BtnCarrinho id={jsonStorage.idCat} cpf={id} /> : ''
            }
            <Lista>    
                {
                    categorias.map(c => (
                        <>
                            <h2  id={c.NOME} key={c.ID} >{c.NOME}</h2>
                            {
                                produtos.map(pr => (
                                    <div className="lista" key={pr.ID}>
                                        {c.ID === pr.CAT ? 
                                        <div className="container-lista"> 
                                            <div className="img-bg" style={{backgroundImage: `url(http://vennder.com.br/administrativo/upload/${id}/${pr.ID}.png)`}}></div>
                                            <div className="lista-detalhes" >                                                
                                                <h3>{c.ID === pr.CAT ? pr.NOME : false}</h3>                               
                                                <p>{c.ID === pr.CAT ? pr.DES : false}</p>     
                                            </div> 
                                            <div className="lista-preco">
                                                <h3>{c.ID === pr.CAT ? pr.POR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) : false}</h3> 
                                                <Link className="BtnPedir" to={`/adicionais/${pr.NOME}/${pr.POR}/${pr.CAT}/${pr.ID}/${id}/${pr.TAM}/${pr.PACKAGE}/${nome}`} >Adicionar</Link>      
                                            </div>                                       
                                        </div>
                                        :  ''}
                                    </div>
                                ))
                            }  
                        </>                         
                    ))
                } 
            </Lista>
        </Container>
    );
}