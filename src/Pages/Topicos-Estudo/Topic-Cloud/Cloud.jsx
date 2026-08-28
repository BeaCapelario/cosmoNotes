import React from "react";
import HeroBanner from "../../../Components/HeroBanner";
import TopicButton from "../../../Components/TopicButton";
import "../page-layout.css";

export default function TopicCloud() {
  const trilha = [
    { label: "Início", link: "/" },
    { label: "Computação em Nuvem (Cloud)" },
  ];

  return (
    <main className="topic-page-main">
      {/* Banner */}
      <HeroBanner
        title="Computação em Nuvem (Cloud)"
        description="Fundamentos de arquitetura IaaS e orquestração de nuvem privada com os módulos essenciais do OpenStack."
        variant="magic"
        breadcrumbs={trilha}
      >
        <span className="badge-category">Infraestrutura</span>
      </HeroBanner>

      {/* Seção de tópicos */}
      <section className="topics-section">
        <h2 className="section-title">Tópicos para estudo</h2>
        <div className="topic-grid">
          <TopicButton titulo="Fundamentos de IaaS" linkTo="/fundamentos-iaas" />
          <TopicButton titulo="OpenStack" linkTo="/openstack" />
        </div>
      </section>
    </main>
  );
}
