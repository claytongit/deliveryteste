import styled from 'styled-components';
import global from './../../Global';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-size: ${global.tamanhoMedio};
        color: ${global.corSecundaria};
        font-family: ${global.fonteSecundaria};
    }

`;