import React from "react";
import styled from "styled-components";

const CampContainer = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Titulo = styled.h1`
  color: #38bdf8;
  font-weight: bold;
  font-style: italic;
`;

function Campeonatos() {
  return (
    <CampContainer>
      <Titulo>Aqui estão todos os campeonatos</Titulo>
    </CampContainer>
  );
}

export default Campeonatos;
