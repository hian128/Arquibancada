import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Titulo = styled.h1`
  color: #38bdf8;
  font-weight: bold;
  font-size: 1.5rem;
`;

function Home() {
  return (
    <HomeContainer>
      <Titulo>Bem-vindo ao Site ArquiBancada!</Titulo>
      <Titulo>Selecione alguma das opções acima para navegar</Titulo>
    </HomeContainer>
  );
}

export default Home;
