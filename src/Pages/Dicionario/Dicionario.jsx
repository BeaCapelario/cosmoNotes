import React from "react";
import FlashCard from "../../Components/FlashCard";
import termosData from "../../assets/Data/dicionario.json";
import "./dicionario.css";

function Dicionario() {
  return (
    <main className="dicionario-main">
      <header className="dicionario-header">
        <h1 className="dicionario-title">Dicionário de TI</h1>
        <p className="dicionario-subtitle">
          Clique nos cards para revelar o significado e revisar seus conceitos de infraestrutura.
        </p>
      </header>
      <section className="flashcards-grid">
        {termosData.map((item) => (
          <FlashCard
            key={item.id} 
            id={item.id}
            termo={item.termo}
            categoria={item.categoria}
            significado={item.significado}
            exemplo={item.exemplo}
            analogia={item.analogia}
            estrela={item.estrela}
          />
        ))}
      </section>
    </main>
  );
}

export default Dicionario;