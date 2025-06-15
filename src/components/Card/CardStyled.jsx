import styled from "styled-components";

export const CardContainer = styled.section`
    max-width: 95%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-bottom: 20px;
`;

export const CardBody = styled.article`
    width: 100%;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    gap: 0.5rem;

    img {
        align-self: center;

        width: 100%;
        height: 150px;
        
        object-fit: cover;
        object-position: center;

        border-radius: 3px;
    }

    h2 {
        align-self: center;
        width: 95%;

        font-weight: 600;
        font-size: 1.6rem;
        letter-spacing: 0.03rem;

        color: #21272A;
    }

    p {
        align-self: center;
        width: 95%;

        font-weight: 500;
        font-size: 0.8rem;
        letter-spacing: 0.02rem;

        color: #404040;
    }

    span {
        align-self: center;
        width: 95%;

        font-weight: 500;
        font-size: 0.8rem;
        word-spacing: 0.1rem;

        margin-top: 5px;

        color: #8D8D8D;
    }
`;

export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    align-self: center;
    width: 95%;

    div {
        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 0.8rem;
        text-align: center;

        gap: 0.3rem;
    }

    button {
        margin-left: auto;
    }
`;

export const Icon = styled.img`
    width: 17px;
    object-fit: cover;
`;
