import styled from 'styled-components';
import global from '../../Global';

export const Container = styled.div`
    margin: 30px 0;
    padding: 0 30px;
`;

export const Pesquisa = styled.div`
    margin-bottom: 30px;

    h3{
        font-size: ${global.tamanhoMedio};
        font-family: ${global.fontePrimaria};
        font-weight: ${global.fonteBold};
        color: ${global.corSecundaria};
    }

    div{
        width: 100%;
        display: flex;
        align-items: center;

        select{
            width: 100%;
            height: 30px;
            border-radius: 5px;
            border: 1px solid #ccc;
            outline: 0;
            color: ${global.corSecundaria};

            &:hover{
                cursor: pointer;
            }

            @media (max-width:900px){
                width: 100%;
            }
        }
    }
`;

export const Lista = styled.div`

    h2{
        font-size: ${global.tamanhoSecundaria};
        font-family: ${global.fontePrimaria};
        font-weight: ${global.fonteBold};
        color: ${global.corPrimaria};
        margin-top: 30px;
    }

    .lista{
        background-color: #EFEFEF;
        margin: 20px 0;

        .container-lista{
            display: flex;
            width: 100%;
            padding: 0px;
            justify-content: space-between;
            align-items: center;
            position: relative;

            .img-bg{
                width: 80px;
                height: 80px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-radius: 5px;
            }
        }

        .lista-detalhes{
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0 7px;
        }

        .lista-detalhes h3, .lista-preco h3{
            font-family: ${global.fontePrimaria};
            font-size: ${global.tamanhoPequeno};
            margin-bottom: 5px;

            @media (max-width:900px){
                font-size: 10px;
            }
        }

        .lista-detalhes p{
            font-family: ${global.fonteSecundaria};
            font-size: ${global.tamanhoMini};
            color: ${global.corSecundaria};
            max-width: 200px;

            @media (max-width:900px){
                font-size: 10px;
            }
        }

        .lista-preco{
            margin-right: 10px;
        }

        .lista-preco h3{
            color: ${global.botaoDanger};
            text-align: end;
        }
    }

    .produtos{
        display: flex;
        background-color: #EFEFEF;
        position: relative;
        margin-bottom: 15px;

        @media (max-width: 900px){
            height: 100px;
        }

        .div-img{
            img{
                width: 100px;
                height: 100px;
            }

            @media (max-width: 900px){
                height: 100%;
            }
        }

        .div-detalhes{
            height: 100%;
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            align-self: center;

            @media (max-width:900px){
                width: 40%;
                margin-left: 10px;
            }

            h3{
                margin-bottom: 13px;
                font-family: ${global.fontePrimaria};
                font-size: ${global.tamanhoMedio};
                color: ${global.corPrimaria};

                @media (max-width: 900px){
                    margin-top: 12px;
                }
            }

            p{
                font-family: ${global.fonteSecundaria};
                font-size: ${global.tamanhoMini};
                color: ${global.corSecundaria};
                
                @media (max-width: 900px){
                    height: 40px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }

        .div-preco{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 25%;
            right: 10px;

            @media (max-width:900px){
                right: 10px;
                top: 15px;
            }

            h3{
                margin-bottom: 11px;
                font-family: ${global.fontePrimaria};
                font-size: ${global.tamanhoMedio};
                color: ${global.botaoDanger};
            }
        }
    }

    .BtnPedir{
        width: 100%;
        background-color: ${global.botaoSucesso};
        padding: 5px 10px;
        color: #FFF;
        text-decoration: none;
        font-size: ${global.tamanhoMini};
        text-align: center;
        border-radius: 5px;
        font-family: ${global.fontePrimaria};
        transition: opacity .5s;

        &:hover{
            opacity: .8;
        }
    }
`;