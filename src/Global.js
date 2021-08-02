import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    //Cores
    corPrimaria:     '#282C34',
    corSecundaria:   '#6d6d6d',
    botaoPrimario:   '#007bff',
    botaoSecundario: '#6c757d',
    botaoSucesso:    '#28a745',
    botaoDanger:     '#dc3545',

    //Fontes
    tamanhoPrimario:   '32px',
    tamanhoSecundaria: '24px',
    tamanhoMedio:      '18px',
    tamanhoPequeno:    '14px',
    tamanhoMini:       '12px',

    //Familia
    fontePrimaria:   'Roboto, sans-serif',
    fonteSecundaria: 'Open Sans, sans-serif',

    //Peso
    fonteLight:    '300',
    fonteMedium:   '500',
    fonteSemiBold: '600',
    fonteBold:     '700',
    fonteBlack:    '900',
}

export const GloboStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;