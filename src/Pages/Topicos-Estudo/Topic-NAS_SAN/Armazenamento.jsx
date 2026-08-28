import React from "react";
import HeroBanner from "../../../Components/HeroBanner";
import TopicButton from "../../../Components/TopicButton";
import "../page-layout.css";

export default function TopicSistemasOperacionais() {
  const trilha = [
    { label: "Início", link: "/" },
    { label: "Armazenamento e Conectividade (NAS e SAN)" },
  ];

  return (
    <main className="topic-page-main">
    <div
      style={{ backgroundColor: "var(--color-background)", minHeight: "100vh" }}
    >
      {/* Exemplo usando a variante 'magic' com o gradiente da sua paleta */}
      <HeroBanner
        title="Armazenamento e Conectividade (NAS e SAN)"
        description="Compartilhamento de arquivos em NAS NetApp, provisionamento de SAN em storages DELL/IBM e conectividade com switches Brocade"
        variant="magic"
        breadcrumbs={trilha}
      >
        <span className="badge-category">Infraestrutura</span>
      </HeroBanner>

      {/* Seção de tópicos */}
      <section className="topics-section">
        <h2 className="section-title">Tópicos para estudo</h2>
        <div className="topic-grid">
          <TopicButton titulo="NAS (NetApp)" linkTo="/nas" />
          <TopicButton titulo="SAN (DELL & IBM)" linkTo="/san" />
          <TopicButton titulo="Rede SAN (Brocade) " linkTo="/rede-san" />
        </div>
      </section>
    </div>

    </main>
  );
}
