import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../subtopic-layout.css";

export default function VeeamBackup() {
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
          <span className="subtopic-breadcrumb-current">Backup Veeam</span>
        </nav>

        <span className="subtopic-badge">Módulo 4: Backup & Proteção de Dados</span>
        <h1 className="subtopic-title">Proteção de Dados & Backup com Veeam</h1>
        <p className="subtopic-description">
          Arquitetura do Veeam Backup & Replication (VBR), configuração de Jobs para máquinas virtuais, 
          repositórios escaláveis e imutáveis (SOBR), e restauração ultrarrápida com Instant VM Recovery.
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
          onClick={() => setActiveTab('architecture')}
        >
          🏗️ Arquitetura & Regra 3-2-1
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'jobs' ? 'active' : ''}`}
          onClick={() => setActiveTab('jobs')}
        >
          🔄 Backup Jobs & Cadeias
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'repositories' ? 'active' : ''}`}
          onClick={() => setActiveTab('repositories')}
        >
          🗄️ Repositórios & SOBR
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'recovery' ? 'active' : ''}`}
          onClick={() => setActiveTab('recovery')}
        >
          ⚡ Instant VM Recovery
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">

        {/* ABA 1: ARQUITETURA E REGRA 3-2-1 */}
        {activeTab === 'architecture' && (
          <section>
            <h2 className="subtopic-pane-title">Arquitetura do Veeam Backup & Replication (VBR)</h2>
            <p className="subtopic-pane-intro">
              O Veeam opera de forma modular e distribuída, separando as funções de gerenciamento, transporte e armazenamento de dados para garantir alta escalabilidade em ambientes virtualizados.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Veeam Backup Server</h3>
                  <p>O cérebro da infraestrutura. Gerencia o agendamento de jobs, catálogo de sessões, autenticação e comunicação com os hipervisores (vCenter, ESXi, AHV).</p>
                </div>
                <div className="subtopic-card-footer">Servidor de Gerenciamento</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Backup Proxy</h3>
                  <p>O motor de processamento (Data Mover). Lê os dados brutos da VM no storage de produção, aplica compressão e desduplicação em tempo real, e envia para o repositório.</p>
                </div>
                <div className="subtopic-card-footer">Processamento & Transporte</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Backup Repository</h3>
                  <p>O local de destino onde os arquivos compactados de backup (<code>.vbk</code>, <code>.vib</code>) são gravados e mantidos sob políticas de retenção.</p>
                </div>
                <div className="subtopic-card-footer">Armazenamento de Destino</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 A Regra de Proteção 3-2-1-1-0</h4>
                <p>
                  • <strong>3 cópias</strong> dos seus dados importantes (1 produção + 2 backups).<br />
                  • <strong>2 mídias diferentes</strong> (ex.: Disco local + Nuvem/Storage de Objeto).<br />
                  • <strong>1 cópia fora da empresa</strong> (Offsite / Cloud Backup).<br />
                  • <strong>1 cópia imutável ou offline</strong> (Imutabilidade contra Ransomware / Air-Gapped).<br />
                  • <strong>0 erros</strong> na recuperação (validação automática com <em>SureBackup</em>).
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: BACKUP JOBS E CADEIAS */}
        {activeTab === 'jobs' && (
          <section>
            <h2 className="subtopic-pane-title">Configuração de Backup Jobs & Tipos de Cadeias</h2>
            <p className="subtopic-pane-intro">
              Um Backup Job define quais VMs proteger, o repositório de destino, a janela de execução e o formato da cadeia de retenção de dados.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Extensão</th>
                    <th>Tipo de Arquivo</th>
                    <th>Comportamento & Conteúdo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>.vbk</strong></td>
                    <td>Full Backup File</td>
                    <td>Contém a cópia completa de todos os blocos de dados da VM em um ponto no tempo.</td>
                  </tr>
                  <tr>
                    <td><strong>.vib</strong></td>
                    <td>Incremental Backup File</td>
                    <td>Armazena apenas os blocos que foram alterados desde o último backup (Full ou Incremental).</td>
                  </tr>
                  <tr>
                    <td><strong>.vbm</strong></td>
                    <td>Metadata File</td>
                    <td>Armazena informações estruturais sobre os jobs, VMs protegidas e mapa da cadeia de backup.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Forever Forward Incremental</h3>
                  <p>Gera um Full inicial (<code>.vbk</code>) e incrementais diários (<code>.vib</code>). Quando a retenção expira, os dados do incremental mais antigo são mesclados dentro do arquivo Full, poupando espaço.</p>
                </div>
                <div className="subtopic-card-footer">Economia de Espaço</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Application-Aware Processing (VSS)</h3>
                  <p>Integração com o Microsoft VSS (Volume Shadow Copy Service) para garantir consistência transacional de bancos de dados (SQL Server, Active Directory, Exchange) antes de tirar o snapshot.</p>
                </div>
                <div className="subtopic-card-footer">Consistência de Aplicação</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Changed Block Tracking (CBT)</h3>
                  <p>Mecanismo do hipervisor que identifica exatamente quais blocos mudaram desde o último ciclo, permitindo backups incrementais em poucos segundos ou minutos.</p>
                </div>
                <div className="subtopic-card-footer">Otimização de I/O</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 3: REPOSITÓRIOS E SOBR */}
        {activeTab === 'repositories' && (
          <section>
            <h2 className="subtopic-pane-title">Repositórios de Armazenamento & Scale-Out (SOBR)</h2>
            <p className="subtopic-pane-intro">
              A Veeam suporta múltiplos tipos de storage e permite consolidar diferentes tecnologias em um único pool escalável gerenciado por políticas automáticas.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Hardened Repository (Linux Imutável)</h3>
                  <p>Repositório Linux local (baseado em sistema de arquivos XFS com reflink) configurado com <strong>Imutabilidade</strong> (flag <code>chattr +i</code>). Nem mesmo o administrador do Veeam ou um ransomware consegue apagar ou criptografar os arquivos durante o período protegido.</p>
                </div>
                <div className="subtopic-card-footer">Anti-Ransomware</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>SOBR: Performance Tier</h3>
                  <p>Discos locais de alta velocidade (NVMe, SSDs, RAID SAS) para gravação rápida dos backups diários e restaurações instantâneas.</p>
                </div>
                <div className="subtopic-card-footer">Camada Rápida Local</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>SOBR: Capacity & Archive Tier</h3>
                  <p>Mapeamento de armazenamento em nuvem de baixo custo (Amazon S3, Azure Blob, S3 Compatible). Move backups antigos automaticamente para reduzir o custo de retenção a longo prazo.</p>
                </div>
                <div className="subtopic-card-footer">Escalabilidade em Nuvem</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Importância da Imutabilidade</h4>
                <p>Ransomwares modernos tentam comprometer o servidor de backup e deletar os repositórios antes de criptografar a produção. Um <strong>Hardened Repository</strong> garante que os dados estejam blindados contra exclusão não autorizada.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: INSTANT VM RECOVERY */}
        {activeTab === 'recovery' && (
          <section>
            <h2 className="subtopic-pane-title">Instant VM Recovery (Restauração Ultrarrápida)</h2>
            <p className="subtopic-pane-intro">
              Tecnologia pioneira da Veeam que permite ligar uma máquina virtual diretamente de dentro do arquivo compactado de backup no repositório, em menos de 2 minutos.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>1. Montagem via vPower NFS</h3>
                  <p>O Veeam publica um datastore NFS temporário para o host ESXi contendo os discos virtuais da VM montados diretamente a partir dos arquivos <code>.vbk</code> (somente-leitura).</p>
                </div>
                <div className="subtopic-card-footer">Montagem Imediata</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>2. Inicialização da VM</h3>
                  <p>A VM é registrada no cluster e ligada instantaneamente. Quaisquer novas gravações (escritas) feitas pela VM em execução são salvas em um arquivo de redirecionamento temporário (Write Cache).</p>
                </div>
                <div className="subtopic-card-footer">RTO Quase Zero</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>3. Migração Definitiva em Segundo Plano</h3>
                  <p>Enquanto os usuários continuam trabalhando normalmente na VM em produção, o Veeam executa um <em>Storage vMotion</em> ou <em>Quick Migration</em> para mover os blocos do repositório para o storage definitivo de produção sem downtime.</p>
                </div>
                <div className="subtopic-card-footer">Migração Transparente</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Granularidade com Veeam Explorers</h4>
                <p>Além de restaurar VMs inteiras, o Veeam permite recuperar itens individuais sem ligar a VM: e-mails do Exchange, arquivos deletados de servidores de arquivos (FLR), registros e tabelas de SQL Server e objetos do Active Directory.</p>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>Valide seu aprendizado sobre Veeam Backup, regras 3-2-1-1-0, repositórios imutáveis e Instant VM Recovery no módulo de exercícios.</p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
