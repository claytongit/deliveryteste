import styled from 'styled-components';
import global from '../../Global';

export const Container = styled.div`

    background: #EFEFEF;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 0 50px;

        @media (max-width:900px){
            width: 100px;
            height: 100px;
            margin: 0 10px;
        }
    }

    div{

        .icons{
            display: flex;
            align-items: center;

            p{
                font-size: ${global.tamanhoMini};
                color: ${global.corSecundaria};
                font-family: ${global.fonteSecundaria};
                margin: 5px 0;
                margin-left: 10px;
            }
        }

        h3{
            font-size: ${global.tamanhoMedio};
            font-family: ${global.fontePrimaria};
            color: ${global.corPrimaria};
            margin-bottom: 10px;
        }
        
    }
`;