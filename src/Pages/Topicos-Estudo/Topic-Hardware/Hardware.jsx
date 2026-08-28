import React from "react";
import HeroBanner from "../../../Components/HeroBanner";
import TopicButton from "../../../Components/TopicButton";
import "../page-layout.css";

export default function TopicHardware() {
  const trilha = [
    { label: "Início", link: "/" },
    { label: "Hardware x86 e Virtualização" },
  ];

  return (
    <main className="topic-page-main">
      {/* Banner */}
      <HeroBanner
        title="Hardware x86 e Virtualização"
        description="Hardware corporativo HPE x86, virtualização tradicional com VMware e infraestrutura hiperconvergente com Nutanix."
        variant="magic"
        breadcrumbs={trilha}
      >
        <span className="badge-category">Infraestrutura</span>
      </HeroBanner>

      {/* Seção de tópicos */}
      <section className="topics-section">
        <h2 className="section-title">Tópicos para estudo</h2>
        <div className="topic-grid">
          <TopicButton titulo="Hardware HPE" linkTo="/hardware-hpe" />
          <TopicButton titulo="Virtualização VMware" linkTo="/vmware" />
          <TopicButton titulo="Virtualização Nutanix" linkTo="/nutanix" />
        </div>
      </section>
    </main>
  );
}
