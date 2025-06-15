import styled from "styled-components";

export const MainBody = styled.div`
    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`;

export const PostsBody = styled.section`
    width: 100%;

    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    padding-bottom: 30px;

    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;

    color: #404040;
`;
