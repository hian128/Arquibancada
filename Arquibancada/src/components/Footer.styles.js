import { Link } from "react-router-dom";
import styled from "styled-components";

export const Rota = styled(Link)`
    display: inline-block;

    color: white;
    text-decoration: none;
    font-weight: 500;

    transition:
        color 0.3s ease,
        transform 0.3s ease;

    &:hover {
        color: #38bdf8;
        transform: translateY(-4px);
    }`;

export const FooterContainer = styled.footer`
    width: 100%;
    background: black;
    color: white;
    padding: 40px 20px 20px;
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;


export const Description = styled.p`
    margin: 10px 0 0;
    color: #a1a1aa;
    font-size: 14px;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 25px;
    @media (max-width: 435px) {
        flex-direction: column;
        text-align: center;
`;

export const NavLink = styled.a`
    display: inline-block;

    color: white;
    text-decoration: none;
    font-weight: 500;

    transition:
        color 0.3s ease,
        transform 0.3s ease;

    &:hover {
        color: #38bdf8;
        transform: translateY(-4px);
    }
`;

export const Copyright = styled.p`
    margin: 30px 0 0;
    padding-top: 20px;

    border-top: 1px solid #333;

    color: #71717a;
    font-size: 13px;
    text-align: center;
`;