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
        a {
            margin-right: 1rem;
            display: inline-flex;
        }
        a img {
            width: 320px;
            border: 2px solid #ddd;
        }
    }

    iframe {
        width: 430px;
        aspect-ratio: 16/9;
        margin: 3rem auto;
        display: block;
        border: 2px solid #e9882a;
    }

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
    }
`;