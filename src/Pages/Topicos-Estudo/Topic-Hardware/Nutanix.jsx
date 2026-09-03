import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subtopic-layout.css";

export default function Nutanix() {
  const [activeTab, setActiveTab] = useState("hci");

  return (
    <article className="subtopic-container">
      {/* 1. Cabeçalho Padronizado */}
      <header className="subtopic-header">
        {/* Breadcrumb */}
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/hardware-virtualizacao">Hardware & Virtualização</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">Nutanix HCI</span>
        </nav>

        <span className="subtopic-badge">
          Módulo 1: Hardware & Virtualização
        </span>
        <h1 className="subtopic-title">
          Virtualização & Hiperconvergência Nutanix
        </h1>
        <p className="subtopic-description">
          Conceitos fundamentais de Infraestrutura Hiperconvergente (HCI), o
          papel da Controller VM (CVM), recursos do hipervisor nativo Nutanix
          AHV e operação centralizada com a plataforma Prism.
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "hci" ? "active" : ""}`}
          onClick={() => setActiveTab("hci")}
        >
          🧱 O que é HCI?
        </button>
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "cvm" ? "active" : ""}`}
          onClick={() => setActiveTab("cvm")}
        >
          🧠 Arquitetura CVM & DSF
        </button>
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "ahv" ? "active" : ""}`}
          onClick={() => setActiveTab("ahv")}
        >
          ⚡ Hipervisor AHV
        </button>
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "prism" ? "active" : ""}`}
          onClick={() => setActiveTab("prism")}
        >
          🎛️ Nutanix Prism
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">
        {/* ABA 1: CONCEITO DE HCI */}
        {activeTab === "hci" && (
          <section>
            <h2 className="subtopic-pane-title">
              Hiperconvergência (HCI) vs. Arquitetura Tradicional (3-Tier)
            </h2>
            <p className="subtopic-pane-intro">
              A hiperconvergência consolida computação, armazenamento e redes em
              nós de servidores x86 padrão de mercado, eliminando storages SAN
              dedicados e redes Fibre Channel complexas.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Critério</th>
                    <th>Infraestrutura Tradicional (3-Tier)</th>
                    <th>Nutanix HCI (Hiperconvergência)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Topologia</strong>
                    </td>
                    <td>
                      Servidores + Switches SAN (FC/iSCSI) + Storage Central
                    </td>
                    <td>
                      Nós modulares (CPU + RAM + Discos locais integrados)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Escalabilidade</strong>
                    </td>
                    <td>
                      Vertical (Scale-Up): expansão limitada do storage central
                    </td>
                    <td>
                      Horizontal (Scale-Out): adicione nós conforme a demanda
                      cresce
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Gerenciamento</strong>
                    </td>
                    <td>
                      Silos separados (equipes de Storage, Rede e Servidores)
                    </td>
                    <td>Interface unificada única gerenciada por software</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Camada de Storage</strong>
                    </td>
                    <td>
                      Hardware dedicado (Controladoras proprietárias, LUNs,
                      HBAs)
                    </td>
                    <td>
                      Software-Defined Storage (Nutanix Distributed Storage
                      Fabric)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Scale-Out Simples</h3>
                  <p>
                    Adicionar poder de processamento e capacidade de disco é tão
                    simples quanto plugar um novo nó no cluster sem parar o
                    ambiente.
                  </p>
                </div>
                <div className="subtopic-card-footer">Crescimento Linear</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Redução de Complexidade</h3>
                  <p>
                    Elimina zonas de Fibre Channel, mascaramento de LUNs e
                    cabeamento SAN complexo, reduzindo drasticamente custos de
                    operação (OpEx).
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Simplicidade Operacional
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: CVM E DSF */}
        {activeTab === "cvm" && (
          <section>
            <h2 className="subtopic-pane-title">
              Controller VM (CVM) & Distributed Storage Fabric (DSF)
            </h2>
            <p className="subtopic-pane-intro">
              A inteligência do Nutanix roda em uma máquina virtual especial
              chamada <strong>CVM (Controller VM)</strong>, presente em cada nó
              físico do cluster.
            </p>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Localidade de Dados (Data Locality)</h4>
                <p>
                  A CVM prioriza a leitura e escrita de dados nos discos
                  NVMe/SSDs locais do nó onde a VM está rodando, eliminando
                  tráfego de rede desnecessário e garantindo altíssimo IOPS.
                </p>
              </div>

              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Fator de Replicação (RF2 / RF3)</h4>
                <p>
                  Para tolerância a falhas, cada bloco de dados gravado
                  localmente é automaticamente replicado em 1 ou 2 outros nós do
                  cluster em segundo plano.
                </p>
              </div>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>DSF (Distributed Storage Fabric)</h3>
                  <p>
                    Agrupa todos os discos locais (NVMe, SSD, HDD) de todos os
                    nós em um pool único de armazenamento distribuído e
                    redundante.
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Storage Definido por Software
                </div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Autocura (Self-Healing)</h3>
                  <p>
                    Se um nó ou disco falhar, as CVMs restantes redistribuem e
                    reconstroem os blocos de dados replicados automaticamente
                    para restaurar a conformidade de réplicas.
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Resiliência Automatizada
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 3: HIPERVISOR AHV */}
        {activeTab === "ahv" && (
          <section>
            <h2 className="subtopic-pane-title">
              Nutanix AHV (Acropolis Hypervisor)
            </h2>
            <p className="subtopic-pane-intro">
              O AHV é o hipervisor nativo e gratuito da Nutanix (baseado em KVM
              corporativo), projetado para entregar virtualização sem custos
              adicionais de licenciamento.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Hipervisor Sem Licença Adicional</h3>
                  <p>
                    Já vem integrado à plataforma Nutanix, dispensando o custo
                    de licenças de terceiros para virtualização básica e
                    avançada.
                  </p>
                </div>
                <div className="subtopic-card-footer">Custo-Benefício</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Live Migration (Migração a Quente)</h3>
                  <p>
                    Transfere VMs em execução entre nós do cluster sem queda de
                    serviço, de forma análoga ao vMotion da VMware.
                  </p>
                </div>
                <div className="subtopic-card-footer">Zero Downtime</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Alta Disponibilidade Integrada (AHV HA)</h3>
                  <p>
                    Reinicia automaticamente máquinas virtuais em nós saudáveis
                    caso o nó hospedeiro sofra uma falha física de hardware.
                  </p>
                </div>
                <div className="subtopic-card-footer">Tolerância a Falhas</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Multi-Hypervisor Support</h3>
                  <p>
                    Além do AHV nativo, clusters Nutanix suportam também
                    hipervisores VMware ESXi e Microsoft Hyper-V sobre a mesma
                    camada DSF.
                  </p>
                </div>
                <div className="subtopic-card-footer">Flexibilidade</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: NUTANIX PRISM */}
        {activeTab === "prism" && (
          <section>
            <h2 className="subtopic-pane-title">
              Gerenciamento com Nutanix Prism
            </h2>
            <p className="subtopic-pane-intro">
              O Prism é a interface gráfica moderna e unificada que permite
              gerenciar computação, armazenamento e redes virtuais através de
              uma única tela (*Single Pane of Glass*).
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Prism Element</h3>
                  <p>
                    Console de gerenciamento local integrado em cada cluster
                    Nutanix. Usado para criar VMs, configurar redes, monitorar
                    IOPS e gerenciar discos.
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Gestão de Cluster Local
                </div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Prism Central</h3>
                  <p>
                    Painel de controle centralizado para orquestrar múltiplos
                    clusters Nutanix distribuídos globalmente, incluindo Data
                    Centers e nuvens públicas.
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Visão Multi-Cluster / Multi-Cloud
                </div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>1-Click Operations (Life Cycle Manager - LCM)</h3>
                  <p>
                    Atualizações de BIOS, firmwares, hipervisor e software com
                    um único clique de forma sequencial e sem indisponibilidade
                    para as VMs.
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Manutenção Simplificada
                </div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Prism Pro / X-Play (Machine Learning)</h3>
                  <p>
                    Utiliza inteligência artificial para prever esgotamento de
                    capacidade (*Capacity Runway*) e automatizar tarefas
                    rotineiras de remediação.
                  </p>
                </div>
                <div className="subtopic-card-footer">AIOps & Automação</div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para fixar o conteúdo?</h3>
          <p>
            Teste seus conhecimentos sobre Hiperconvergência (HCI), Nutanix AHV
            e gerenciamento via Prism no módulo de exercícios.
          </p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
