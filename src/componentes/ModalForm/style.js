import styled from 'styled-components';
import global from '../../Global';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        width: 60%;
        background-color: #FFF;

        @media (max-width: 900px){
            width: 95%;
        }

        .cabecalho{
            width: 400px;
            height: 200px;
            background-size: cover;
            display: flex;
            margin: 0 auto;
            align-items: center;
            justify-content: center;
            background-color: #CCCCCC;
            padding: 10px;
                    
            img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin: 0 50px;
            }

            @media (max-width: 900px){
                width: 100%;
            }
        }

        .content{
            width: 400px;
            height: 400px;
            overflow-y: scroll;
            margin: 0 auto;
            border: 1px solid #ccc;
            padding: 15px;

            @media (max-width: 900px){
                width: 100%;
                height: 500px;
            }

            .details{
                margin: 15px 0;
                h3{
                    font-size: ${global.tamanhoPequeno};
                    font-family: ${global.fonteSecundaria};
                    color: ${global.corPrimaria};
                    font-weight: ${global.fonteBold};
                    margin-bottom: 5px;
                }

                p{
                    font-size: ${global.tamanhoMini};
                    font-family: ${global.fonteSecundaria};
                    color: ${global.corSecundaria};
                    font-weight: ${global.fonteBold};
                    margin-bottom: 5px;
                }

                span{
                    font-weight: ${global.fonteLight};
                }
            }

            form{
                display: flex;
                flex-direction: column;
                width: 100%;
                margin: 30px 0;

                h3{
                    font-size: ${global.tamanhoPequeno};
                    font-weight: ${global.fonteBold};
                    color: ${global.corPrimaria};
                    font-family: ${global.fonteSecundaria};
                    margin-bottom: 10px;
                }

                select{
                    padding: 3px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    outline: none;
                    margin-bottom: 5px;
                    font-size: ${global.tamanhoMini};

                    @media (max-width: 900px){
                        padding: 10px;
                    }
                }

                input {
                    padding: 5px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: ${global.tamanhoMini};
                    margin-bottom: 5px;
                    outline: none;

                    @media (max-width: 900px){
                        padding: 10px;
                    }
                }

                button{
                    padding: 5px;
                    border: none;
                    background-color: ${global.botaoPrimario};
                    color: #FFF;
                    cursor: pointer;
                    font-size: ${global.tamanhoMini};
                    transition: opacity .5s;

                    &:hover{
                        opacity: .8;
                    }

                    @media (max-width: 900px){
                        padding: 10px;
                    }
                }
            }
        }
    }
`;
