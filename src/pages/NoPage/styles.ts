// styles.ts

import styled from "styled-components";

export const Container = styled.div`
    background-color: #333;
    color: white;
    padding: 1.3rem;
    padding-top: 1.8rem;

    h2 {
        font-weight: 600;
        text-align: center;
        margin-bottom: 1rem;
    }

    .content {
        display: flex;
        align-items: flex-start;
        
        a {
            margin-right: 1rem;
            display: inline-flex;
        }
        a img {
            width: 320px;
            border: 2px solid #ddd;
        }

        ul {
            padding: 1.1rem;
        }
    }

    iframe {
        width: 430px;
        aspect-ratio: 16/9;
        margin: 3rem auto;
        display: block;
        border: 2px solid #e9882a;
    }

    .checked {
        background-color: #0075ff;
        color: white;
        border: none;
        border-radius: 1rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        padding: 5px;
        display: block;
        margin: 2rem auto 0;
        width: 200px;
        max-width: 100%;
        transition: background-color 0.3s ease;
    }

    .checked:hover{
        background-color: #0053c6;
    }
    
    .content-navigate {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        a, .navigation-button{
            border: none;
            border-radius: 0.5rem;
            background-color: #eee;
            color: black;
            font-size: 1rem;
            cursor: pointer;
            padding: 0.5rem 1rem;
            text-decoration: none;
            transition: background-color 0.1s ease;
        }

        .navigation-button:disabled, .navigation-button:hover:disabled {
            background-color: #aaa;
            cursor: not-allowed;
        }
        a:hover {
            background-color: #fff;
        }
        
        .navigation-button:hover {
            background-color: #fff;
        }
    }
    /* Estilos para os botões "Anterior" e "Próximo" */
    

    @media (max-width: 700px) {
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            a {
                margin: 0;
            }
        }

        iframe {
            width: 85vw;
        }
    }

    @media(max-width: 450px) {
        .content a img {
            width: 80vw;
        }

        iframe {
            width: 100%;
        }

        .checked {
            width: 100%;
        }

        .navigation-button:hover {
            background-color: #d97124;
        }
    }
`;
