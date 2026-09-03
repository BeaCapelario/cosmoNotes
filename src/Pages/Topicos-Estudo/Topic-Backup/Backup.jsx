import React from "react";
import HeroBanner from "../../../Components/HeroBanner";
import TopicButton from "../../../Components/TopicButton";
import BackupVeeam from "./BackupVeeam";
import BackupTSM from "./BackupTSM";
import "../page-layout.css";

export default function TopicBackup() {
  const trilha = [
    { label: "Início", link: "/" },
    { label: "Backup e Proteção de Dados" },
  ];

  return (
    <main className="topic-page-main">
      {/* Banner */}
      <HeroBanner
        title="Backup e Proteção de Dados"
        description="Rotinas de proteção e recuperação rápida de VMs com Veeam, e políticas de retenção e ciclo de vida de dados com IBM TSM."
        variant="magic"
        breadcrumbs={trilha}
      >
        <span className="badge-category">Infraestrutura</span>
      </HeroBanner>

      {/* Seção de tópicos */}
      <section className="topics-section">
        <h2 className="section-title">Tópicos para estudo</h2>
        <div className="topic-grid">
          <TopicButton titulo="Backup Veeam" linkTo="/backup-veeam" />
          <TopicButton titulo="Backup TSM" linkTo="/backup-tsm" />
        </div>
      </section>
    </main>
  );
}
