import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";

export function App() {
  return (
    <BrowserRouter>
      <Header />

      <main style={{ padding: "2rem", color: "#fff" }}>
        <h2>Bem-vindo ao Arquibancada!</h2>
        <p>Selecione uma opção no menu acima.</p>
      </main>

      <Routes>
        <Route path="/" element={<h1>Página Inicial / Campeonatos</h1>} />
        <Route path="/live" element={<h1>Jogos Ao Vivo</h1>} />
        <Route path="/times" element={<h1>Lista de Times</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
