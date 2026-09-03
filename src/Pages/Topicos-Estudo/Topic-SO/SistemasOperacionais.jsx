import React from "react";
import HeroBanner from "../../../Components/HeroBanner";
import TopicButton from "../../../Components/TopicButton";
import Linux from "./Linux";
import WindowsServer from "./WindowsServer";
import Altiris from "./Altiris";
import "../page-layout.css";

export default function TopicSistemasOperacionais() {
  const trilha = [
    { label: "Início", link: "/" },
    { label: "Sistema Operacionais e Gerenciamento" },
  ];

  return (
    <main className="hardware-main">
      <HeroBanner
        title="Sistema Operacionais e Gerenciamento"
        description="Administração de Linux Server, gerenciamento de Active Directory no Windows Server e automação de deployments com Altiris."
        variant="magic"
        breadcrumbs={trilha}
      >
         <span className="badge-category">
          Infraestrutura
        </span>
      </HeroBanner>

      <section className="topics-section">
        <h2>Tópicos para estudo</h2>
        <div className="topic-grid">
          <TopicButton titulo="Linux Server (Red Hat & Ubuntu)" linkTo="/linux-server" />
          <TopicButton titulo="Windows Server" linkTo="/windows-server" />
          <TopicButton titulo="Gerenciamento com Altiris (Broadcom)" linkTo="/altiris" />
        </div>
      </section>
  </main>
  );
}
