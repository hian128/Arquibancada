import styled from "styled-components";


export const Card = styled.div`
    width: 450px;
    min-height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 25px;

    background: black;
    border: 1px solid #1f2937;
    border-radius: 16px;

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        border-color: #38bdf8;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    }
`;

export const Imagem = styled.img`
    width: 140px;
    height: 140px;

    object-fit: cover;

    border-radius: 50%;
    border: 3px solid #38bdf8;

    margin-bottom: 20px;
`;

export const Nome = styled.h2`
    margin: 0 0 10px;

    color: white;
    font-size: 22px;
    font-weight: 700;

    text-align: center;
`;

export const Descricao = styled.p`
    margin: 0;

    color: #9ca3af;
    font-size: 14px;
    line-height: 1.6;

    text-align: center;
`;

export const ListaLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 15px;

    margin: auto 0 0;
    padding: 25px 0 0;

    list-style: none;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    width: 42px;
    height: 42px;

    border-radius: 50%;

    background: #fff;

    transition:
        transform 0.3s ease,
        background 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        background: #38bdf8;
    }
`;

export const LogoLinks = styled.img`
    width: 22px;
    height: 22px;

    object-fit: contain;
`;