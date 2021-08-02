import React, {useState, useEffect} from 'react';
import api from './../../services/api';
import { useParams } from 'react-router-dom';
import { FaLocationArrow, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

import { Container } from './style';

export default function Header(){
    const [user, setUser] = useState([]);
    const [ id, setId ]   = useState();
    const { nome }        = useParams();

    useEffect(()=>{
        async function LoadDados(){
            const res = await api.get(`/user/${nome}`);
            setUser(res.data);            
        }

        LoadDados(); 
        
        if(user === true){
            setId(user[0].CPF);
        }

    },[nome, user]);

    return(
        <Container>            
            {
                user.map(d => (
                    <>
                        <img src={`http://vennder.com.br/administrativo/upload/${id}/${d.PACKAGE}_profile.png`} alt="" />
                        <div>
                            <h3>{d.NOME}</h3>
                            <div className="icons">
                                <FaLocationArrow color="#6d6d6d" size={10} />
                                <p>{d.BAI}</p>
                            </div>

                            <div className="icons">
                                <FaMapMarkedAlt color="#6d6d6d" size={10} />
                                <p>{d.CID}</p> 
                            </div>

                            <div className="icons">
                                <FaPhone color="#6d6d6d" size={10} />
                                <p>{d.TEL}</p>
                            </div> 
                        </div>
                    </>
                ))
            }
        </Container>
    );
}