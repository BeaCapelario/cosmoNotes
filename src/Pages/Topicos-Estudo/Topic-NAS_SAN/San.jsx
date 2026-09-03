import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../subtopic-layout.css";

export default function DellIbmSAN() {
  const [activeTab, setActiveTab] = useState('san');

  return (
    <article className="subtopic-container">
      {/* 1. Cabeçalho Padronizado com Breadcrumb */}
      <header className="subtopic-header">
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/armazenamento">Armazenamento & Conectividade</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">SAN (DELL & IBM)</span>
        </nav>

        <span className="subtopic-badge">Módulo 3: Armazenamento & Conectividade</span>
        <h1 className="subtopic-title">Redes SAN Corporativas (DELL & IBM)</h1>
        <p className="subtopic-description">
          Armazenamento em nível de bloco (Block-Level Storage), transporte de dados via Fibre Channel vs. iSCSI, 
          provisionamento e mascaramento de LUNs, e redundância com Multipathing (MPIO).
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'san' ? 'active' : ''}`}
          onClick={() => setActiveTab('san')}
        >
          🧱 O que é SAN?
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'fc_vs_iscsi' ? 'active' : ''}`}
          onClick={() => setActiveTab('fc_vs_iscsi')}
        >
          ⚡ FC vs. iSCSI
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'luns' ? 'active' : ''}`}
          onClick={() => setActiveTab('luns')}
        >
          💽 Provisionamento de LUNs
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'mpio' ? 'active' : ''}`}
          onClick={() => setActiveTab('mpio')}
        >
          🔀 Redundância & MPIO
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'dell_ibm' ? 'active' : ''}`}
          onClick={() => setActiveTab('dell_ibm')}
        >
          🏢 DELL & IBM Storages
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">

        {/* ABA 1: O QUE É SAN */}
        {activeTab === 'san' && (
          <section>
            <h2 className="subtopic-pane-title">Armazenamento em Nível de Bloco (Block Storage)</h2>
            <p className="subtopic-pane-intro">
              Diferente de um NAS (que compartilha pastas e arquivos prontos), uma **SAN (Storage Area Network)** entrega blocos de disco brutos (*raw blocks*) diretamente aos servidores. Para o sistema operacional do servidor, a LUN é enxergada como um disco local conectado diretamente ao barramento SCSI.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Desempenho & Baixa Latência</h3>
                  <p>Otimizado para cargas de trabalho de altíssimo I/O, como bancos de dados transacionais (Oracle, SQL Server) e hipervisores de virtualização (VMware ESXi, Hyper-V).</p>
                </div>
                <div className="subtopic-card-footer">Alta Performance</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Sistema de Arquivos no Host</h3>
                  <p>A controladora de storage apenas fornece os blocos; a responsabilidade de formatar o sistema de arquivos (NTFS, EXT4, VMFS) fica a cargo do servidor hospedeiro.</p>
                </div>
                <div className="subtopic-card-footer">Formatação no Servidor</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Rede Dedicada e Isolada</h3>
                  <p>O tráfego de dados SAN trafega em uma rede isolada da rede corporativa de usuários, garantindo segurança, throughput previsível e ausência de contenção de pacotes.</p>
                </div>
                <div className="subtopic-card-footer">Isolamento de Tráfego</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: FC VS ISCSI */}
        {activeTab === 'fc_vs_iscsi' && (
          <section>
            <h2 className="subtopic-pane-title">Comparativo Prático: Fibre Channel (FC) vs. iSCSI</h2>
            <p className="subtopic-pane-intro">
              Ambos transportam comandos do protocolo SCSI até os discos do storage, mas utilizam meios físicos, custos e camadas de rede completamente distintos.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Fibre Channel (FC)</th>
                    <th>iSCSI (Internet SCSI)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Meio Físico</strong></td>
                    <td>Fibra óptica dedicada + Transceivers SFP+ / SW</td>
                    <td>Cabos de rede padrão (Cat6A / Fibra Ethernet)</td>
                  </tr>
                  <tr>
                    <td><strong>Placa no Servidor</strong></td>
                    <td>HBA (Host Bus Adapter) dedicada (QLogic, Emulex)</td>
                    <td>NIC comum com Software Initiator ou HBA iSCSI (TOE)</td>
                  </tr>
                  <tr>
                    <td><strong>Velocidades Comuns</strong></td>
                    <td>16 Gbps, 32 Gbps, 64 Gbps (lossless nativo)</td>
                    <td>10 GbE, 25 GbE, 40 GbE, 100 GbE</td>
                  </tr>
                  <tr>
                    <td><strong>Switches de Rede</strong></td>
                    <td>SAN Switches dedicados (Brocade, Cisco MDS)</td>
                    <td>Switches Ethernet padrão (com suporte a Jumbo Frames / VLAN)</td>
                  </tr>
                  <tr>
                    <td><strong>Identificador de Porta</strong></td>
                    <td><strong>WWPN</strong> (World Wide Port Name — 16 dígitos hex)</td>
                    <td><strong>IQN</strong> (iSCSI Qualified Name — ex.: <code>iqn.1991-05.com...</code>)</td>
                  </tr>
                  <tr>
                    <td><strong>Custo e Complexidade</strong></td>
                    <td>Alto custo e equipe especializada em Fabric</td>
                    <td>Baixo a moderado custo; aproveita infraestrutura IP</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Boas Práticas de iSCSI</h4>
                <p>Para obter estabilidade em iSCSI, é indispensável habilitar <strong>Jumbo Frames (MTU 9000)</strong> em toda a cadeia (servidor, switches e storage) e isolar o tráfego em uma VLAN exclusiva sem roteamento.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 3: LUNS E ZONEAMENTO */}
        {activeTab === 'luns' && (
          <section>
            <h2 className="subtopic-pane-title">Provisionamento de LUNs, Zoneamento e LUN Masking</h2>
            <p className="subtopic-pane-intro">
              O processo de entrega de um disco SAN envolve criar a fatia de armazenamento (**LUN**) e garantir que apenas o servidor correto consiga acessá-la de forma segura.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>1. Criação da LUN (Logical Unit Number)</h3>
                  <p>Espaço alocado a partir de um Storage Pool (RAID corporativo). Pode ser provisionado como Thin (dinâmico) ou Thick (alocado previamente).</p>
                </div>
                <div className="subtopic-card-footer">Pool de Armazenamento</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>2. Zoneamento no Switch SAN (FC Zoning)</h3>
                  <p>Configurado nos switches SAN (Brocade/Cisco) para interconectar o WWPN da HBA do servidor ao WWPN da porta da controladora do storage (<em>Single-Initiator Zoning</em>).</p>
                </div>
                <div className="subtopic-card-footer">Segurança no Switch</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>3. LUN Masking (Mapeamento)</h3>
                  <p>Configurado dentro do storage para associar a LUN criada exclusivamente aos identificadores (WWPN ou IQN) do grupo de hosts de destino.</p>
                </div>
                <div className="subtopic-card-footer">Segurança no Storage</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Risco de Corrupção sem Cluster Aware</h4>
                <p>Nunca mapeie a mesma LUN para dois servidores diferentes simultaneamente, a menos que eles usem um sistema de arquivos com suporte a cluster compartilhado (como <strong>VMware VMFS</strong> ou <strong>Microsoft CSV</strong>).</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: MPIO E MULTIPATHING */}
        {activeTab === 'mpio' && (
          <section>
            <h2 className="subtopic-pane-title">Redundância de Caminhos: Multipathing (MPIO / ALUA)</h2>
            <p className="subtopic-pane-intro">
              Para evitar ponto único de falha (SPOF), servidores corporativos possuem no mínimo duas portas HBA conectadas a switches independentes (**Fabric A** e **Fabric B**) e controladoras redundantes (**Controladora A** e **B**).
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>MPIO (Multi-Path I/O)</h3>
                  <p>Módulo do sistema operacional que detecta múltiplos caminhos físicos até o mesmo disco e consolida esses caminhos em um único dispositivo lógico, evitando que o host veja discos duplicados.</p>
                </div>
                <div className="subtopic-card-footer">Consolidação de Disco</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>ALUA (Asymmetric Logical Unit Access)</h3>
                  <p>Padrão da indústria onde a controladora informa ao servidor quais caminhos são <strong>Active/Optimized</strong> (caminho direto prioritário) e quais são <strong>Active/Non-Optimized</strong> (caminho alternativo de backup).</p>
                </div>
                <div className="subtopic-card-footer">Protocolo ALUA</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Políticas de Balanceamento</h3>
                  <p>• <strong>Round Robin:</strong> Distribui os pacotes de I/O de forma alternada entre todos os caminhos ativos otimizados.<br />
                  • <strong>Failover Only:</strong> Utiliza um caminho principal e só comuta para o secundário em caso de pane física.</p>
                </div>
                <div className="subtopic-card-footer">Load Balancing & Failover</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 5: DELL & IBM STORAGES */}
        {activeTab === 'dell_ibm' && (
          <section>
            <h2 className="subtopic-pane-title">Tecnologias SAN: DELL EMC vs. IBM Storage</h2>
            <p className="subtopic-pane-intro">
              Visão geral das principais famílias de storages corporativos SAN das líderes de mercado DELL e IBM.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>DELL PowerStore & Unity</h3>
                  <p>Linhas All-Flash e híbridas de alta performance. Utilizam arquitetura Active-Active com processamento distribuído, desduplicação inline 4:1 garantida e integração nativa com VMware vSphere (VAAI/VASA).</p>
                </div>
                <div className="subtopic-card-footer">DELL Technologies</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>IBM FlashSystem & Storwize</h3>
                  <p>Baseados no sistema operacional <strong>IBM Spectrum Virtualize</strong>. Destaque para os módulos proprietários <em>FlashCore Modules (FCM)</em> com compressão por hardware sem perda de performance e virtualização de storages externos.</p>
                </div>
                <div className="subtopic-card-footer">IBM Storage</div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>Valide seu aprendizado sobre redes SAN, Fibre Channel, iSCSI, zoneamento e configuração de MPIO no módulo de exercícios.</p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}

