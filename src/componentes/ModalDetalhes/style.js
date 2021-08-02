import styled from 'styled-components';
import global from '../../Global';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;

    @media (max-width:900px){
        width: 100%;
    }

    div{
        width: 60%;
        background-color: #FFF;

        @media (max-width:900px){
            width: 95%;
        }

        .cabecalho{
            width: 400px;
            height: 200px;
            display: flex;
            margin: 0 auto;
            align-items: center;
            justify-content: center;
            padding: 10px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            @media (max-width:900px){
                width: 100%;
            }
        }

        .content{
            width: 400px;
            height: 400px;
            border: 1px solid #CCCC;
            margin: 0 auto;
            position: relative;
            overflow-y: scroll;

            @media (max-width:900px){
                width: 100%;
            }

            h2{
                font-size: ${global.tamanhoMedio};
                font-family: ${global.fontePrimaria};
                font-weight: ${global.fonteBold};
                text-align: center;
                margin: 15px;
            }

            div{
                width: 100%;
                margin: 0 auto;

                h3{
                    font-size: ${global.tamanhoPequeno};
                    font-family: ${global.fontePrimaria};
                    color: ${global.corSecundaria};
                    margin: 15px;
                }

                .adicionais{
                    width: 300px;
                    margin: 15px 0 0 15px;

                    h4{
                        font-size: ${global.tamanhoMini};
                        font-family: ${global.fonteSecundaria};
                        color: ${global.corSecundaria};
                    }

                    .adicionais-content{   
                        margin: 20px 0;
                        width: 100%;

                        p{
                            font-size: ${global.tamanhoMini};
                            color: ${global.corSecundaria};
                            font-family: ${global.fonteSecundaria};
                            font-weight: ${global.fonteLight};
                            margin: 5px 0;
                        }
                    }
                }

                div{
                    width: 92%;
                    
                    select{
                        height: 30px;
                        width: 100%;
                        border-radius: 5px;
                        border: 1px solid #ccc;
                        outline: 0;
                        color: ${global.corSecundaria};
                        margin-bottom: 10px;

                        &:hover{
                            cursor: pointer;
                        }

                        @media (max-width:900px){
                            width: 100%;
                        }
                    }

                    p{
                        font-size: ${global.tamanhoMini};
                        color: ${global.corSecundaria};
                        font-family: ${global.fonteSecundaria};
                        font-weight: ${global.fonteLight};
                        margin: 5px 1px;
                    }

                    h3{
                        margin: 0;
                    }
                }
            }

            .btnpedir{
                width: 98%;
                padding: 10px;
                display: flex;
                justify-content: flex-end;
                margin: 0 auto;

                a{
                    width: 100%;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: ${global.fonteSecundaria};
                    bottom: 10px;
                    background-color: ${global.botaoPrimario};
                    border: 0;
                    padding: 5px 30px;
                    color: #fff;
                    cursor: pointer;
                    box-shadow: 2px 2px 5px rgba(0,0,0,.5);
                    transition: opacity .5s;
                    text-decoration: none;

                    &:hover{
                        opacity: .8;
                        box-shadow: none;
                    }
                }
            }
        }

        .quantidade{
            width: 100%;
            padding: 0 15px;

            .title{
                text-align: left;
                padding: 0;
                margin: 15px 0;
                font-size: ${global.tamanhoPequeno};
                color: ${global.corSecundaria};
            }

            div{
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .btnQtd{
                background-color: ${global.botaoPrimario};
                border-radius: 3px;
                cursor: pointer;
                box-shadow: 2px 2px 5px rgba(0,0,0,.5);
                transition: opacity .5s;

                &:hover{
                    opacity: .8;
                    box-shadow: none;
                }
            }

            .textQtd{
                font-family: ${global.fonteSecundaria};
                color: ${global.corSecundaria};
                font-size: ${global.tamanhoPequeno};
                font-weight: ${global.fonteBold};
            }
        }
    }
`;