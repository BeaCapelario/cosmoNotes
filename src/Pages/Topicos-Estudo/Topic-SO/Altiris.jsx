import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../subtopic-layout.css";

export default function Altiris() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <article className="subtopic-container">
      {/* 1. Cabeçalho Padronizado com Breadcrumb */}
      <header className="subtopic-header">
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/sistemas-operacionais">Sistemas Operacionais</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">Gerenciamento com Altiris (Broadcom)</span>
        </nav>

        <span className="subtopic-badge">Módulo 2: Sistemas Operacionais & Gerenciamento</span>
        <h1 className="subtopic-title">Gerenciamento Corporativo com Altiris</h1>
        <p className="subtopic-description">
          Gerenciamento centralizado do ciclo de vida de servidores e endpoints com o Broadcom/Symantec ITMS: 
          distribuição automatizada de imagens de SO (OS Deployment) e conformidade contínua com Patch Management.
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          🏢 Arquitetura & Agente (SMA)
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'deployment' ? 'active' : ''}`}
          onClick={() => setActiveTab('deployment')}
        >
          🚀 OS Deployment & Imagens
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'patching' ? 'active' : ''}`}
          onClick={() => setActiveTab('patching')}
        >
          🛡️ Patch Management
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'inventory' ? 'active' : ''}`}
          onClick={() => setActiveTab('inventory')}
        >
          📊 Inventário & Conformidade
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">

        {/* ABA 1: ARQUITETURA E AGENTE */}
        {activeTab === 'overview' && (
          <section>
            <h2 className="subtopic-pane-title">Arquitetura do Symantec IT Management Suite (ITMS)</h2>
            <p className="subtopic-pane-intro">
              O Altiris opera em modelo cliente-servidor, estruturado em torno do servidor central de gerenciamento (Notification Server / SMP) e do agente residente em cada máquina gerenciada.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Symantec Management Platform (SMP)</h3>
                  <p>Servidor central que hospeda a base de dados do CMDB, console web administrativo, agendador de políticas e regras de distribuição de pacotes.</p>
                </div>
                <div className="subtopic-card-footer">Servidor de Notificação</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Symantec Management Agent (SMA)</h3>
                  <p>Agente leve instalado nos endpoints e servidores. Comunica-se periodicamente via HTTPS com o SMP para baixar políticas, tarefas e inventário de hardware/software.</p>
                </div>
                <div className="subtopic-card-footer">Agente Local</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Package Servers (Site Servers)</h3>
                  <p>Servidores distribuídos em filiais ou datacenters remotos para armazenar em cache imagens de SO, instaladores e patches, evitando sobrecarga no link de WAN.</p>
                </div>
                <div className="subtopic-card-footer">Cache Local & Otimização</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: OS DEPLOYMENT */}
        {activeTab === 'deployment' && (
          <section>
            <h2 className="subtopic-pane-title">Distribuição Automatizada de Sistemas Operacionais (OS Deployment)</h2>
            <p className="subtopic-pane-intro">
              O módulo Deployment Solution permite instalar e padronizar servidores físicos (Bare-Metal) e máquinas virtuais de forma 100% automatizada e remota.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Etapa do Fluxo</th>
                    <th>Tecnologia Envolvida</th>
                    <th>O que Acontece</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. Inicialização de Rede</strong></td>
                    <td>PXE Boot / DHCP Options</td>
                    <td>O servidor liga e busca via rede o ambiente de pré-instalação (WinPE ou Linux PE).</td>
                  </tr>
                  <tr>
                    <td><strong>2. Aplicação de Imagem</strong></td>
                    <td>Ghost / WIM / Disk Image</td>
                    <td>Download e gravação da imagem base padronizada (Golden Image) nos discos do host.</td>
                  </tr>
                  <tr>
                    <td><strong>3. Injeção de Drivers</strong></td>
                    <td>DeployAnywhere (DA)</td>
                    <td>Identificação do modelo de hardware (ex.: HPE ProLiant) e injeção automática de drivers de rede e controladora SAS.</td>
                  </tr>
                  <tr>
                    <td><strong>4. Pós-Configuração</strong></td>
                    <td>Sysprep & Scripts Custom</td>
                    <td>Renomeação do host, atribuição de IP, ingresso no Active Directory (Domain Join) e instalação do agente SMA.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Golden Image + Modularidade</h4>
                <p>Em vez de criar uma imagem para cada modelo de servidor, utiliza-se uma imagem única agnóstica combinada com a injeção dinâmica de drivers pelo <em>DeployAnywhere</em>.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 3: PATCH MANAGEMENT */}
        {activeTab === 'patching' && (
          <section>
            <h2 className="subtopic-pane-title">Gestão e Aplicação de Patches de Segurança</h2>
            <p className="subtopic-pane-intro">
              O Patch Management Solution automatiza a identificação de vulnerabilidades (CVEs) e a distribuição de correções para sistemas Windows Server, Red Hat, Ubuntu e aplicações terceiras.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>1. Sincronização de Boletins</h3>
                  <p>Download diário das listas de segurança oficiais da Microsoft, Red Hat e fornecedores de software para o banco do Notification Server.</p>
                </div>
                <div className="subtopic-card-footer">Catálogo de Ameaças</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>2. Varredura de Conformidade (Scan)</h3>
                  <p>O agente SMA executa uma auditoria local e envia ao servidor o relatório exato de quais patches e KB estão ausentes no servidor.</p>
                </div>
                <div className="subtopic-card-footer">Auditoria de Vulnerabilidade</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>3. Criação de Software Update Policies</h3>
                  <p>Agrupamento de patches aprovados em políticas agendadas, definindo grupos de computadores-alvo e regras de download.</p>
                </div>
                <div className="subtopic-card-footer">Políticas de Distribuição</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>4. Janelas de Manutenção & Reboot</h3>
                  <p>Definição estrita de horários permitidos para instalação e reinicialização automática (Maintenance Windows), evitando indisponibilidade em horário comercial.</p>
                </div>
                <div className="subtopic-card-footer">Janelas de Produção</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Estratégia de Anéis de Implantação (Deployment Rings)</h4>
                <p>Boas práticas recomendam aplicar patches primeiro no ambiente de <strong>Teste/Homologação (Pilot Ring)</strong> antes de distribuir para a totalidade dos servidores de <strong>Produção</strong>.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: INVENTÁRIO & CONFORMIDADE */}
        {activeTab === 'inventory' && (
          <section>
            <h2 className="subtopic-pane-title">Inventário de Ativos & Relatórios de Conformidade</h2>
            <p className="subtopic-pane-intro">
              Auditoria contínua do parque computacional para controle de licenças de software, integridade de componentes de hardware e conformidade com normas de segurança.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Inventário de Hardware</h3>
                  <p>Coleta automática de número de série, modelo do chassi, slots de memória RAM ocupados, modelos de CPU e integridade dos discos rígidos.</p>
                </div>
                <div className="subtopic-card-footer">Auditoria Física</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Inventário de Software & Licenças</h3>
                  <p>Mapeamento de todos os programas, versões e pacotes instalados no ambiente, identificando softwares não autorizados ou licenças excedentes.</p>
                </div>
                <div className="subtopic-card-footer">Governança de TI</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Filtros & Targets Dinâmicos</h3>
                  <p>Criação de listas inteligentes de servidores com base em critérios de hardware/software (ex.: <em>"Servidores Windows com menos de 8GB RAM precisando do patch KB500..."</em>).</p>
                </div>
                <div className="subtopic-card-footer">Segmentação Inteligente</div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>Valide seu aprendizado sobre Altiris ITMS, OS Deployment, injeção de drivers e políticas de Patch Management no módulo de exercícios.</p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
