import React, { useEffect, useState } from 'react';
import { Container } from './style';
import api from './../../services/api';
import { useHistory, useParams } from 'react-router-dom';

export default function ModalForm(){
    
    const { id, cpf }                     = useParams();
    const [ custo, setCusto ]             = useState();
    const [ endereco, setEndereco ]       = useState([]);
    const [ sub, setSub ]                 = useState([]);
    const [ produtos, setProdutos ]       = useState([]);
    const [ cep, setCep ]                 = useState('');
    const [ nome, setNome ]               = useState('');
    const [ rua, setRua ]                 = useState('');
    const [ bairro, setBairro ]           = useState('');
    const [ cidade, setCidade ]           = useState('');
    const [ numero, setNumero ]           = useState('');
    const [ referencia, setReferencia ]   = useState('');
    const [ pack, setPack ]               = useState('');
    const [ fixo, setFixo ]               = useState('');
    const [ wa, setWa ]                   = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [ email, setEmail ]             = useState('');
    const [ obs, setObs ]                 = useState('');
    const [ pagamento, setPagamento ]     = useState('Dinheiro')
    const [ addrtype, setAddrtype]        = useState(["Dineheiro", "Débito", "Crédito"]);

    var today = new Date();
    var d = today.getDate();
    var M = today.getMonth();
    var Y = today.getFullYear();  
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var image = `http://vennder.com.br/administrativo/upload/${cpf}/${id}.png`;

    var dataAtualFormatada = d + '-0' + M + '-' + Y + ' ' + h + ':' + m + ':' + s;
    
    const history = useHistory();

    const data = JSON.parse(localStorage.getItem('@data'));

    let form = {
        'ID':              123123,
        'NOME':            nome,
        'ENDERECO':        rua,
        'NUMERO':          numero,
        'COMPLEMENTO':     complemento,
        'BAIRRO':          bairro,
        'CEP':             cep,
        'CIDADE':          cidade,
        'UF':              "uf",
        'REFERENCIA':      referencia,
        'TEL_FIXO':        fixo,
        'TEL_WHATSAPP':    wa,
        'EMAIL':           email,
        'SENHA':           "senha",
        'OBSERVACAO':      obs,
        'LATITUDE':        "latitude",
        'LONGITUDE':       "longitude",
        'FOTO':            "",
        'STATUS':          "ABERTO",
        'PACKAGE':         data.Package,
        'DATAATUALIZACAO': dataAtualFormatada,
        'GCM':             "gcm",
        'APARELHO':        "aparelho",
        'EMAILREAL':       email,
        'PREMIO':          "premio",
        'DATAPREMIO':      "data premio",
        'VERSAO':          "versao",
    }

    useEffect(()=>{
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(result => result.json())
            .then(res => {
                setEndereco(res);
        });

        async function loadSubs(){
            const res = await api.get(`/ac/${id}`);
            setSub(res.data);            
        }

        async function loadPro(){
            const res = await api.get(`/produtos/${id}`);
            setProdutos(res.data.produtos);
        }

        async function loadUser(){
            const res = await api.get(`/user/${cpf}`);
            var d = res.data;
            d.forEach(element => {
                setPack(element.PACKAGE);
            });
        }

        async function somar(){
            sub.forEach(element => {
                if(data.SubProduto[element.NOME] === true){                    
                    setCusto(element.CUSTO);
                }else{
                    return false;
                }
            })
        }

        loadSubs();
        loadPro();
        loadUser();
        somar();

    }, [cep, id, cpf]);

    let total = 0;

    if(custo > 0){
        total = data.PreçoDeProduto + custo;
    }else{
        total = data.PreçoDeProduto;
    }

    async function handleFInalizar(event){
        event.preventDefault();
        
        try {
            await api.post('/pedido', form);
            localStorage.clear();
            history.push(`/finalizarPedido/${id}/${cpf}`);        
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container>
            <div>
                <div className="cabecalho" style={{ backgroundImage: `url(${image})` }}></div> 
                <div className="content">
                    <div className="details">   
                        <h3>{data.QuantidadeDeProduto + ' '} {data.Nome}</h3>                   
                        {
                            produtos.map(p => (                               
                                data.SaboresPizza[p.NOME] ? <p>- {p.NOME} </p> : ''                               
                            ))
                        }
                    </div>
                    <div className="details">
                        <h3>Adicionais</h3>                        
                            {
                                sub.map(p =>(
                                    data.SubProduto[p.NOME] ? <p>- {p.NOME} {p.CUSTO.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p> : ''
                                ))
                            }                    
                    </div>                    
                    <div className="details">
                        <h3>Valor total a pagar</h3>
                        <p>{parseFloat(total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>
                    <form>
                        <h3>Finalizar pedido</h3>
                        <select name="formadepagamento" id="formadepagamento" onChange={event => setPagamento((addrtype[event.target.value]))} >
                            {
                                addrtype.map((address, key) => <option value={key}>{address}</option>)
                            }
                        </select>
                        <input  type="text" name="nome"         id="nome"         placeholder="Informe seu nome completo" value={nome}         onChange={event => setNome(event.target.value)}/>
                        <input  type="text" name="cep"          id="cep"          placeholder="Informe seu CEP"           value={cep}          onChange={event => setCep(event.target.value)} />
                        <input  type="text" name="endereco"     id="endereco"     placeholder="Endereço Rua/Av"           value={rua}          onChange={event => setRua(event.target.value)} />
                        <input  type="text" name="bairro"       id="bairro"       placeholder="Informe o bairro"          value={bairro}       onChange={event => setBairro(event.target.value)} />
                        <input  type="text" name="numero"       id="numero"       placeholder="Numero"                    value={numero}       onChange={event => setNumero(event.target.value)} />
                        <input  type="text" name="fixo"         id="fixo"         placeholder="Telefone fixo"             value={fixo}         onChange={event => setFixo(event.target.value)} />
                        <input  type="text" name="wa"           id="wa"           placeholder="WhatsApp"                  value={wa}           onChange={event => setWa(event.target.value)} />
                        <input  type="email"name="email"        id="email"        placeholder="email"                     value={email}        onChange={event => setEmail(event.target.value)} />
                        <input  type="text" name="complemento"  id="complemento"  placeholder="Complemento"               value={complemento}  onChange={event => setComplemento(event.target.value)} />
                        <input  type="text" name="referencia"   id="referencia"   placeholder="Ponto de referência"       value={referencia}   onChange={event => setReferencia(event.target.value)} />
                        <input  type="text" name="obs"          id="obs"          placeholder="Observação"                value={obs}          onChange={event => setObs(event.target.value)} />
                        <button type="submit" onClick={handleFInalizar}>Finalizar pedido</button>
                    </form>
                </div>
            </div>
        </Container>
    );
}