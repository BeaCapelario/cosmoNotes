import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../subtopic-layout.css";

export default function TsmBackup() {
  const [activeTab, setActiveTab] = useState('architecture');

  return (
    <article className="subtopic-container">
      {/* 1. Cabeçalho Padronizado com Breadcrumb */}
      <header className="subtopic-header">
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/backup">Backup & Proteção de Dados</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">Backup TSM (IBM Spectrum Protect)</span>
        </nav>

        <span className="subtopic-badge">Módulo 4: Backup & Proteção de Dados</span>
        <h1 className="subtopic-title">IBM Spectrum Protect (TSM)</h1>
        <p className="subtopic-description">
          Arquitetura clássica corporativa do IBM Tivoli Storage Manager (TSM), o paradigma de 
          Incremental Permanente (Progressive Incremental) e gestão do ciclo de vida com Management Classes.
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
          onClick={() => setActiveTab('architecture')}
        >
          🏛️ Arquitetura TSM
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'incremental_forever' ? 'active' : ''}`}
          onClick={() => setActiveTab('incremental_forever')}
        >
          ♾️ Incremental Permanente
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'retention' ? 'active' : ''}`}
          onClick={() => setActiveTab('retention')}
        >
          ⏱️ Políticas de Retenção
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'storage_hierarchy' ? 'active' : ''}`}
          onClick={() => setActiveTab('storage_hierarchy')}
        >
          🗄️ Storage Pools & Fitas
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">

        {/* ABA 1: ARQUITETURA TSM */}
        {activeTab === 'architecture' && (
          <section>
            <h2 className="subtopic-pane-title">Arquitetura do IBM Spectrum Protect (TSM)</h2>
            <p className="subtopic-pane-intro">
              O TSM é uma solução corporativa de backup e arquivamento de dados em larga escala baseada em um banco de dados relacional (IBM Db2) que rastreia individualmente cada objeto protegido na organização.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>TSM Server</h3>
                  <p>Núcleo central de processamento. Mantém o catálogo de metadados no banco IBM Db2, controla políticas de retenção, orquestra tarefas e gerencia os pools de armazenamento.</p>
                </div>
                <div className="subtopic-card-footer">Servidor Central (Db2)</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Backup-Archive (BA) Client</h3>
                  <p>Agente instalado nos nós gerenciados (servidores Linux, Windows, AIX). Faz a varredura do sistema de arquivos e envia apenas os arquivos novos ou alterados ao servidor.</p>
                </div>
                <div className="subtopic-card-footer">Agente de Cliente (Node)</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>TSM Operations Center (OC)</h3>
                  <p>Interface web moderna que fornece visão unificada de alertas, conformidade de SLAs, taxa de desduplicação, capacidade dos pools e status dos nós clientes.</p>
                </div>
                <div className="subtopic-card-footer">Console Web / Dashboard</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: INCREMENTAL PERMANENTE */}
        {activeTab === 'incremental_forever' && (
          <section>
            <h2 className="subtopic-pane-title">O Paradigma do Incremental Permanente (Progressive Incremental)</h2>
            <p className="subtopic-pane-intro">
              Diferente de sistemas de backup tradicionais que exigem backups Full periódicos (semanais/mensais), o TSM realiza **apenas 1 Backup Full inicial**. A partir de então, apenas arquivos modificados ou novos são transmitidos para sempre.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Abordagem Tradicional (Full Periódico)</th>
                    <th>Modelo IBM TSM (Incremental Permanente)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Exige re-leitura de 100% dos dados a cada ciclo Full.</td>
                    <td>Nunca mais realiza um Full completo após o primeiro dia.</td>
                  </tr>
                  <tr>
                    <td>Alto consumo de banda de rede e sobrecarga de I/O em produção.</td>
                    <td>Tráfego de rede e consumo de I/O mínimos no dia a dia.</td>
                  </tr>
                  <tr>
                    <td>Cadeias de backup frágeis (Full + vários Incrementais encadeados).</td>
                    <td>Rastreamento individual por objeto no banco Db2; sem encadeamento frágil.</td>
                  </tr>
                  <tr>
                    <td>Restauração exige consolidar a fita/arquivo Full com os incrementais.</td>
                    <td>O TSM localiza diretamente a versão ativa de cada arquivo para restauração pontual.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Objeto Ativo vs. Objeto Inativo</h4>
                <p>
                  • <strong>Active Version:</strong> A versão mais recente do arquivo que ainda existe no disco do servidor cliente.<br />
                  • <strong>Inactive Version:</strong> Versões anteriores de arquivos modificados ou arquivos que foram deletados da produção, retidas de acordo com a política.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 3: POLÍTICAS DE RETENÇÃO */}
        {activeTab === 'retention' && (
          <section>
            <h2 className="subtopic-pane-title">Políticas de Retenção & Management Classes (Ciclo de Vida)</h2>
            <p className="subtopic-pane-intro">
              No TSM, as regras de retenção são definidas no <strong>Backup Copy Group</strong> dentro de uma <strong>Management Class</strong> através de 4 parâmetros essenciais.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Parâmetro TSM</th>
                    <th>Nome Completo</th>
                    <th>O que Define na Prática</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>VEREXISTS</code></td>
                    <td>Versions Exist</td>
                    <td>Número máximo de versões mantidas enquanto o arquivo <strong>ainda existe</strong> no servidor cliente (ex.: 5 versões).</td>
                  </tr>
                  <tr>
                    <td><code>VERDELETED</code></td>
                    <td>Versions Deleted</td>
                    <td>Número de versões inativas mantidas após o arquivo <strong>ser excluído</strong> do servidor cliente (ex.: 1 versão).</td>
                  </tr>
                  <tr>
                    <td><code>RETEXTRA</code></td>
                    <td>Retain Extra Days</td>
                    <td>Por quantos dias as <strong>versões inativas intermediárias</strong> serão mantidas antes de expirar (ex.: 30 dias).</td>
                  </tr>
                  <tr>
                    <td><code>RETONLY</code></td>
                    <td>Retain Only Days</td>
                    <td>Por quantos dias a <strong>última versão restante</strong> de um arquivo deletado será guardada antes do expurgo definitivo (ex.: 365 dias).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Processo de Expiração (Expiration)</h3>
                  <p>Processo diário automático executado no TSM Server (<code>EXPIRE INVENTORY</code>) que valida os metadados no Db2 contra as Management Classes e marca blocos expirados para reutilização de espaço.</p>
                </div>
                <div className="subtopic-card-footer">Limpeza & Conformidade</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: STORAGE POOLS E HIERARQUIA */}
        {activeTab === 'storage_hierarchy' && (
          <section>
            <h2 className="subtopic-pane-title">Storage Pools & Hierarquia de Armazenamento</h2>
            <p className="subtopic-pane-intro">
              O TSM organiza seu armazenamento em **Storage Pools** estruturados em camadas lógicas, permitindo migração automática de dados entre discos de alta velocidade, storages de nuvem e bibliotecas de fitas magnéticas (Tape Libraries).
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Directory-Container Pools</h3>
                  <p>Piscinas modernas baseadas em diretórios de disco ou Object Storage com suporte nativo a <strong>Desduplicação Inline e Global</strong> e Compressão por software.</p>
                </div>
                <div className="subtopic-card-footer">Camada Primária em Disco</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Tape Storage Pools (LTO)</h3>
                  <p>Gerenciamento avançado de fitas magnéticas (LTO-7, LTO-8, LTO-9). O TSM automatiza a montagem de volumes, controle de robôs de fita e processos de <strong>Reclamação de Espaço (Reclamation)</strong> para reaproveitar fitas com dados fragmentados.</p>
                </div>
                <div className="subtopic-card-footer">Arquivamento de Longo Prazo</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Node Replication</h3>
                  <p>Replicação automática de dados e metadados de servidor para servidor TSM (Server-to-Server) através da rede WAN para planos de Disaster Recovery.</p>
                </div>
                <div className="subtopic-card-footer">Disaster Recovery (DR)</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Conceito de Reclamation em Fitas</h4>
                <p>Em fitas magnéticas, os dados expirados não podem ser deletados individualmente. O TSM executa a <strong>Reclamation</strong>: lê os dados válidos restantes de fitas quase vazias, copia para uma nova fita compactada e devolve as fitas antigas para a gaveta de disponíveis (Scratch).</p>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>Valide seu aprendizado sobre IBM Spectrum Protect (TSM), modelo Incremental Forever e parâmetros de Management Classes no módulo de exercícios.</p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
