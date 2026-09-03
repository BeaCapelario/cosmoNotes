import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../subtopic-layout.css";

export default function NetAppNAS() {
  const [activeTab, setActiveTab] = useState('ontap');

  return (
    <article className="subtopic-container">
      {/* 1. Cabeçalho Padronizado com Breadcrumb */}
      <header className="subtopic-header">
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/armazenamento">Armazenamento & Conectividade</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">NAS NetApp (ONTAP)</span>
        </nav>

        <span className="subtopic-badge">Módulo 3: Armazenamento & Conectividade</span>
        <h1 className="subtopic-title">Armazenamento NAS com NetApp ONTAP</h1>
        <p className="subtopic-description">
          Arquitetura de armazenamento em nível de arquivos (Network Attached Storage), criação de Storage Virtual Machines (SVMs), 
          gerenciamento de FlexVols e compartilhamento de dados via NFS (Linux) e CIFS/SMB (Windows).
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'ontap' ? 'active' : ''}`}
          onClick={() => setActiveTab('ontap')}
        >
          🗄️ Arquitetura ONTAP
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'svm' ? 'active' : ''}`}
          onClick={() => setActiveTab('svm')}
        >
          🏢 SVM & Agregados
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'protocols' ? 'active' : ''}`}
          onClick={() => setActiveTab('protocols')}
        >
          🌐 NFS vs. CIFS/SMB
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'volumes' ? 'active' : ''}`}
          onClick={() => setActiveTab('volumes')}
        >
          📁 FlexVols & Qtrees
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'snapshots' ? 'active' : ''}`}
          onClick={() => setActiveTab('snapshots')}
        >
          📸 Snapshot & Eficiência
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">

        {/* ABA 1: ARQUITETURA ONTAP */}
        {activeTab === 'ontap' && (
          <section>
            <h2 className="subtopic-pane-title">O que é um NAS & Sistema Operacional NetApp ONTAP</h2>
            <p className="subtopic-pane-intro">
              O <strong>Network Attached Storage (NAS)</strong> entrega armazenamento em nível de arquivos (*File-Level Storage*) através da rede IP padrão (Ethernet), permitindo que múltiplos servidores e clientes acessem e compartilhem os mesmos diretórios de forma simultânea.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>NetApp ONTAP OS</h3>
                  <p>Sistema operacional proprietário da NetApp unificado para armazenamento multi-protocolo (NAS para arquivos e SAN para blocos), com foco em alta disponibilidade em pares de controladoras (HA Pairs).</p>
                </div>
                <div className="subtopic-card-footer">Sistema Operacional de Storage</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Sistema de Arquivos WAFL</h3>
                  <p><em>Write Anywhere File Layout</em>: arquitetura otimizada para gravação que escreve blocos em qualquer local disponível do disco sem sobrescrever dados anteriores, viabilizando snapshots instantâneos com custo zero de desempenho.</p>
                </div>
                <div className="subtopic-card-footer">Arquitetura WAFL</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>System Manager & CLI</h3>
                  <p>Administração gráfica via interface Web HTTPS moderna ou console de linha de comando (CLI) via SSH para automação de tarefas com REST APIs e Ansible.</p>
                </div>
                <div className="subtopic-card-footer">Gerenciamento Unificado</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: SVM E AGREGADOS */}
        {activeTab === 'svm' && (
          <section>
            <h2 className="subtopic-pane-title">Storage Virtual Machines (SVM / Vserver) & Agregados</h2>
            <p className="subtopic-pane-intro">
              O ONTAP utiliza uma estrutura hierárquica e modular para separar a infraestrutura física de hardware das entidades lógicas de entrega de dados aos clientes.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Nível</th>
                    <th>Função & Responsabilidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Agregado (Aggregate)</strong></td>
                    <td>Físico</td>
                    <td>Pool de discos físicos protegidos por RAID-DP ou RAID-TEC onde o espaço bruto é provisionado.</td>
                  </tr>
                  <tr>
                    <td><strong>SVM (Storage Virtual Machine)</strong></td>
                    <td>Lógico / Virtual</td>
                    <td>Servidor de arquivos virtual isolado (Multi-Tenancy) com suas próprias interfaces de rede (LIFs), autenticação e políticas.</td>
                  </tr>
                  <tr>
                    <td><strong>LIF (Logical Interface)</strong></td>
                    <td>Rede</td>
                    <td>Endereço IP associado a uma porta de rede física ou agregação (LACP) que pode migrar entre nós do cluster sem queda de conexão.</td>
                  </tr>
                  <tr>
                    <td><strong>Junction Path</strong></td>
                    <td>Namespace</td>
                    <td>Ponto de montagem lógico que conecta o volume à árvore de diretórios unificada da SVM.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Isolamento Multi-Tenant</h4>
                <p>Uma única controladora física NetApp pode hospedar várias SVMs totalmente isoladas entre si, cada uma com seu próprio domínio AD, regras de acesso e roteamento.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 3: NFS VS CIFS/SMB */}
        {activeTab === 'protocols' && (
          <section>
            <h2 className="subtopic-pane-title">Protocolos de Compartilhamento: NFS vs. CIFS/SMB</h2>
            <p className="subtopic-pane-intro">
              A SVM pode atender simultaneamente sistemas operacionais Linux/Unix e Windows utilizando os protocolos nativos de cada ecossistema ou compartilhamentos multiprotocolo híbridos.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>NFS (Network File System)</th>
                    <th>CIFS / SMB (Server Message Block)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Público Alvo</strong></td>
                    <td>Linux, Unix e Hipervisores (VMware ESXi Datastores)</td>
                    <td>Estações de trabalho e Servidores Windows Server</td>
                  </tr>
                  <tr>
                    <td><strong>Versões Principais</strong></td>
                    <td>NFSv3 (sem estado), NFSv4 / NFSv4.1 (com estado/Kerberos)</td>
                    <td>SMB 2.1, SMB 3.0, SMB 3.1.1 (Criptografia nativa)</td>
                  </tr>
                  <tr>
                    <td><strong>Controle de Acesso</strong></td>
                    <td>Export Rules (por IP/Sub-rede) + Permissões POSIX (UID/GID)</td>
                    <td>Share Permissions + ACLs NTFS do Active Directory</td>
                  </tr>
                  <tr>
                    <td><strong>Autenticação</strong></td>
                    <td>IP do Cliente, LDAP ou Kerberos</td>
                    <td>Active Directory / Kerberos / NTLM</td>
                  </tr>
                  <tr>
                    <td><strong>Ponto de Acesso</strong></td>
                    <td>Export Path (ex.: <code>192.168.1.50:/vol_linux</code>)</td>
                    <td>UNC Path (ex.: <code>\\svm01.corp\share_docs</code>)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ABA 4: VOLUMES E QTREES */}
        {activeTab === 'volumes' && (
          <section>
            <h2 className="subtopic-pane-title">Criação de Volumes Flexíveis (FlexVols) & Qtrees</h2>
            <p className="subtopic-pane-intro">
              No ONTAP, o armazenamento é alocado em <strong>FlexVols</strong>, que são volumes lógicos desacoplados dos discos físicos subjacentes e altamente elásticos.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>FlexVol (Flexible Volume)</h3>
                  <p>Unidade fundamental de gerenciamento no ONTAP. Pode crescer (grow) ou diminuir (shrink) a quente sem interrupção de serviço e com suporte a Thin Provisioning.</p>
                </div>
                <div className="subtopic-card-footer">Alocação Dinâmica</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Qtrees (Quotas Trees)</h3>
                  <p>Subdivisões lógicas dentro de um FlexVol que funcionam como diretórios especiais, permitindo aplicar cotas de disco e estilo de segurança específico (UNIX ou NTFS).</p>
                </div>
                <div className="subtopic-card-footer">Subdivisão & Cotas</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Export Policies & Shares</h3>
                  <p>Regras que determinam quais clientes da rede têm permissão para montar o volume NFS (por IP/rede) ou mapear o compartilhamento SMB (por usuário/grupo do AD).</p>
                </div>
                <div className="subtopic-card-footer">Segurança de Acesso</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 5: SNAPSHOTS & EFICIÊNCIA */}
        {activeTab === 'snapshots' && (
          <section>
            <h2 className="subtopic-pane-title">Snapshots Instantâneos & Tecnologias de Eficiência</h2>
            <p className="subtopic-pane-intro">
              Graças à arquitetura WAFL, a NetApp oferece proteção pontual contra corrupções e ataques de ransomware com consumo mínimo de armazenamento.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>NetApp Snapshot</h3>
                  <p>Cópia somente-leitura pontual e instantânea do sistema de arquivos. Não copia dados (apenas bloqueia ponteiros existentes), ocupando zero espaço inicial e sem impacto de I/O.</p>
                </div>
                <div className="subtopic-card-footer">Proteção de Dados</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Desduplicação & Compressão</h3>
                  <p>Elimina blocos idênticos duplicados em nível de volume ou agregado (Deduplication) e comprime dados em memória antes da gravação em disco (Inline Compression).</p>
                </div>
                <div className="subtopic-card-footer">Economia de Espaço</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>SnapMirror</h3>
                  <p>Tecnologia de replicação assíncrona ou síncrona de snapshots entre clusters NetApp para contingência e Disaster Recovery (DR).</p>
                </div>
                <div className="subtopic-card-footer">Disaster Recovery</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>FlexClone</h3>
                  <p>Criação instantânea de cópias de leitura/escrita de volumes ou LUNs a partir de snapshots, sem duplicar os dados originais (ideal para ambientes de teste e homologação).</p>
                </div>
                <div className="subtopic-card-footer">Clonagem Rápida</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Auto-Delete de Snapshots</h4>
                <p>Em volumes sob alta taxa de alteração de dados, é fundamental configurar políticas de retenção ou <em>Snapshot Auto-Delete</em> para evitar o esgotamento do FlexVol.</p>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>Valide seu aprendizado sobre sistemas NAS NetApp ONTAP, SVMs, protocolos NFS/CIFS e snapshots no módulo de exercícios.</p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
