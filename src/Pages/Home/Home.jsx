import React from "react";
import TopicButton from "../../Components/TopicButton";
import "./home.css";

function Home() {
  return (
    <main className="home-main">
      <section className="welcome-section">
        <span className="welcome-badge">Estudos sobre TI e Infraestrutura</span>
        <h1 className="welcome-title">cosmoNotes</h1>
        <p className="welcome-subtitle">
          Organizando meu aprendizado de uma forma dinâmica.
        </p>
      </section>

      <section className="page-divisor">
        <img src= "" />
      </section>

      <section className="topics-section">
        <h2 className="section-title">O que vamos estudar hoje?</h2>
        <div className="topic-grid">
          <TopicButton
            titulo="Hardware X86 e Virtualização"
            linkTo="/hardware-virtualizacao"
          />
          <TopicButton
            titulo="Sistemas Operacionais e Gerenciamento"
            linkTo="/sistemas-operacionais"
          />
          <TopicButton
            titulo="Armazenamento e Conectividade (NAS e SAN)"
            linkTo="/armazenamento"
          />
          <TopicButton titulo="Backup e Proteção de Dados" linkTo="/backup" />
          <TopicButton titulo="Computação em Nuvem (Cloud)" linkTo="/nuvem" />
        </div>
      </section>
    </main>
  );
}

export default Home;
