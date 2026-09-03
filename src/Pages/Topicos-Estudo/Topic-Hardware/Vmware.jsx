import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subtopic-layout.css";

export default function Vmware() {
  const [activeTab, setActiveTab] = useState("esxi");

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
          <span className="subtopic-breadcrumb-current">VMware vSphere</span>
        </nav>

        <span className="subtopic-badge">
          Módulo 1: Hardware & Virtualização
        </span>
        <h1 className="subtopic-title">Virtualização VMware vSphere</h1>
        <p className="subtopic-description">
          Fundamentos do hypervisor Bare-Metal ESXi, orquestração centralizada
          via vCenter Server, provisionamento de Máquinas Virtuais, topologia de
          vSwitches e clusters com vSphere HA.
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "esxi" ? "active" : ""}`}
          onClick={() => setActiveTab("esxi")}
        >
          ⚙️ ESXi & Hypervisor Type-1
        </button>
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "vcenter" ? "active" : ""}`}
          onClick={() => setActiveTab("vcenter")}
        >
          🏢 vCenter & Gestão
        </button>
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "vms" ? "active" : ""}`}
          onClick={() => setActiveTab("vms")}
        >
          💻 VMs & Recursos
        </button>
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "networking" ? "active" : ""}`}
          onClick={() => setActiveTab("networking")}
        >
          🌐 vSwitches & Redes
        </button>
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "ha" ? "active" : ""}`}
          onClick={() => setActiveTab("ha")}
        >
          🛡️ Alta Disponibilidade (HA)
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">
        {/* ABA 1: ESXi */}
        {activeTab === "esxi" && (
          <section>
            <h2 className="subtopic-pane-title">
              VMware ESXi: Hypervisor Bare-Metal (Type-1)
            </h2>
            <p className="subtopic-pane-intro">
              O ESXi roda diretamente sobre o hardware físico do servidor, sem a
              necessidade de um sistema operacional hospedeiro subjacente,
              garantindo baixa latência e alto desempenho.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Arquitetura Bare-Metal</h3>
                  <p>
                    Acesso direto às CPUs corporativas, memória ECC e
                    controladoras de armazenamento físico, eliminando camadas
                    intermediárias de SO.
                  </p>
                </div>
                <div className="subtopic-card-footer">Type-1 Hypervisor</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>DCUI (Direct Console User Interface)</h3>
                  <p>
                    Interface de texto acessível via console físico ou KVM/iLO
                    para configuração inicial de IP de gestão, máscara de rede e
                    senha root.
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Acesso Local / Console
                </div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Host Client (Web GUI)</h3>
                  <p>
                    Interface gráfica acessada diretamente pelo navegador (
                    <code>https://&lt;IP-ESXi&gt;</code>) para administração
                    autônoma de um host individual.
                  </p>
                </div>
                <div className="subtopic-card-footer">Gestão Standalone</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: VCENTER */}
        {activeTab === "vcenter" && (
          <section>
            <h2 className="subtopic-pane-title">
              VMware vCenter Server (VCSA)
            </h2>
            <p className="subtopic-pane-intro">
              O cérebro da infraestrutura VMware: appliance centralizado (VCSA)
              que unifica o gerenciamento de múltiplos hosts ESXi em clusters
              lógicos.
            </p>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Gestão Unificada de Datacenters</h4>
                <p>
                  Permite criar Data Centers virtuais, agrupar hosts em Clusters
                  e aplicar políticas globais de conformidade, templates e
                  controle de acesso (RBAC).
                </p>
              </div>

              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Requisito de Storage Compartilhado</h4>
                <p>
                  Recursos avançados como migração ao vivo (vMotion) e failover
                  automático (HA) exigem que os hosts acessem os mesmos
                  datastores (iSCSI, FC ou NFS).
                </p>
              </div>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>vSphere vMotion</h3>
                  <p>
                    Migra máquinas virtuais em execução de um host físico para
                    outro sem tempo de inatividade (zero downtime), transferindo
                    estado de RAM e CPU.
                  </p>
                </div>
                <div className="subtopic-card-footer">Migração a Quente</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>vSphere DRS (Distributed Resource Scheduler)</h3>
                  <p>
                    Balanceia dinamicamente a carga de CPU e memória RAM entre
                    os hosts físicos do cluster utilizando migrações automáticas
                    via vMotion.
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Balanceamento de Carga
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 3: VMS E RECURSOS */}
        {activeTab === "vms" && (
          <section>
            <h2 className="subtopic-pane-title">
              Provisionamento de Máquinas Virtuais & Arquivos
            </h2>
            <p className="subtopic-pane-intro">
              Cada VM é composta por um conjunto de arquivos armazenados em um
              Datastore (VMFS ou NFS), operando de forma isolada com hardware
              virtualizado.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Extensão</th>
                    <th>Tipo de Arquivo</th>
                    <th>Função Principal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>.vmx</strong>
                    </td>
                    <td>Arquivo de Configuração</td>
                    <td>
                      Texto com especificações de hardware (vCPUs, RAM,
                      interfaces de rede).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>.vmdk</strong>
                    </td>
                    <td>Disco Rígido Virtual</td>
                    <td>
                      Armazena os dados do disco rígido e sistema de arquivos da
                      VM.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>.nvram</strong>
                    </td>
                    <td>BIOS / UEFI Virtual</td>
                    <td>
                      Mantém o estado da BIOS virtual e ordem de boot da
                      máquina.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>.vmsn / -delta.vmdk</strong>
                    </td>
                    <td>Snapshots</td>
                    <td>
                      Armazena pontos de restauração e alterações após a criação
                      de um snapshot.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Thin Provisioning (Disco Dinâmico)</h3>
                  <p>
                    Aloca espaço no datastore sob demanda conforme os dados são
                    gravados pela VM, otimizando o uso do storage físico.
                  </p>
                </div>
              </div>
              <div className="subtopic-card">
                <div>
                  <h3>Thick Provisioning (Disco Fixo)</h3>
                  <p>
                    Aloca previamente todo o espaço definido no datastore no
                    momento da criação, garantindo performance consistente.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: REDES E VSWITCHES */}
        {activeTab === "networking" && (
          <section>
            <h2 className="subtopic-pane-title">
              Redes Virtuais: Standard vSwitches (vSS)
            </h2>
            <p className="subtopic-pane-intro">
              Os switches virtuais interconectam as máquinas virtuais entre si e
              com a rede física corporativa através de placas de rede físicas
              (Uplinks / vmnics).
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>VM Port Groups</h3>
                  <p>
                    Grupos de portas lógicas onde as placas de rede virtuais
                    (vNICs) das VMs são conectadas. Suportam segmentação por
                    VLAN ID (802.1Q).
                  </p>
                </div>
                <div className="subtopic-card-footer">Tráfego de Produção</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>VMkernel Ports (vmk)</h3>
                  <p>
                    Interfaces de rede dedicadas para serviços de infraestrutura
                    do próprio ESXi: Gerenciamento (Management), vMotion, IP
                    Storage (iSCSI/NFS) e vSAN.
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Tráfego de Hipervisor
                </div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Uplinks Físicos (vmnic)</h3>
                  <p>
                    Portas de rede físicas do servidor conectadas ao vSwitch,
                    configuradas em Teaming/Failover para tolerância a falhas de
                    cabo ou switch.
                  </p>
                </div>
                <div className="subtopic-card-footer">Conexão Física</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 5: ALTA DISPONIBILIDADE (HA) */}
        {activeTab === "ha" && (
          <section>
            <h2 className="subtopic-pane-title">
              vSphere High Availability (HA)
            </h2>
            <p className="subtopic-pane-intro">
              Proteção automatizada contra falhas de hardware: se um host ESXi
              do cluster parar, as VMs afetadas são reiniciadas automaticamente
              em hosts saudáveis.
            </p>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Mecanismo de Heartbeat</h4>
                <p>
                  Os hosts trocam sinais constantes (Heartbeats) pela rede de
                  gestão e pelos datastores. Se um host deixa de responder, o HA
                  detecta a falha e orquestra o reinício.
                </p>
              </div>

              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ RTO vs. RPO no vSphere HA</h4>
                <p>
                  O HA não evita a queda da aplicação durante a falha física; há
                  um breve tempo de reinicialização da VM no novo host (Recovery
                  Time Objective reduzido).
                </p>
              </div>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>FDM (Fault Domain Manager)</h3>
                  <p>
                    Agente instalado em cada nó do cluster que elege um host{" "}
                    <em>Master</em> responsável por monitorar os nós{" "}
                    <em>Subordinates</em> e coordenar os reinícios.
                  </p>
                </div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Datastore Heartbeating</h3>
                  <p>
                    Canal de validação secundário via storage para diferenciar
                    quando um host realmente travou ou apenas perdeu a
                    conectividade da rede de gestão (Network Isolation).
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>
            Valide seu aprendizado sobre VMware ESXi, vCenter, vSwitches e
            clusters vSphere HA no módulo de exercícios.
          </p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
