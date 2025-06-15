import styled from "styled-components";

export const Nav = styled.nav`
    width: 12.5%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-right: 1px solid #ddd;
    background-color: #FFF;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;

    padding: 30px 20px;
    box-sizing: border-box;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageLogo = styled.img`
    width: 50px;
    margin-bottom: 8px;
`;

export const Brand = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    color: #697077;
`;

export const Separator = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 20px 0;
`;

export const Menu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    flex: 1;
`;

export const MenuItem = styled.li`
    margin-bottom: 5px;
`;

export const MenuButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;

    background: ${(props) => (props.active ? "#f2f4f8" : "transparent")};
    border: ${(props) => (props.active ? "1px solid #e0e0e0" : "none")};

    color: #161616;
    font-weight: 500;
    font-size: 1rem;
    padding: 10px 15px;
    border-radius: 4px;
    border: none;

    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background-color: #f2f4f8;
    }

    img {
        width: 20px;
        height: 20px;
        object-fit: contain;
    }

    span {
        flex: 1;
        text-align: left;
    }
`;

export const PostButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #0051ff;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
    border: none;

    cursor: pointer;
    transition: background 0.3s;

    margin-top: 20px;

    &:hover {
        background-color: #003ecc;
    }
`;

export const UserSection = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const Avatar = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: #dcdcdc;
    object-fit: cover;
`;

export const UserInfo = styled.div`
    flex: 1;
    margin-left: 10px;

    strong {
        display: block;
        font-size: 0.9rem;
        color: #404040;
    }

    span {
        font-size: 0.8rem;
        color: #404040;
    }
`;

export const OptionsButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0 5px;

    color: #697077;

    &:hover {
        color: #161616;
    }
`;
