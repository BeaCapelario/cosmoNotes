import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../subtopic-layout.css";

export default function BrocadeSAN() {
  const [activeTab, setActiveTab] = useState('switches');

  return (
    <article className="subtopic-container">
      {/* 1. Cabeçalho Padronizado com Breadcrumb */}
      <header className="subtopic-header">
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/armazenamento">Armazenamento & Conectividade</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">Rede SAN (Brocade)</span>
        </nav>

        <span className="subtopic-badge">Módulo 3: Armazenamento & Conectividade</span>
        <h1 className="subtopic-title">Switches SAN Brocade & Zoneamento Fibre Channel</h1>
        <p className="subtopic-description">
          Topologia de switches Fibre Channel, sistema operacional Brocade Fabric OS (FOS), 
          endereçamento por WWN e implementação de Zoneamento seguro para isolamento de tráfego de storage.
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'switches' ? 'active' : ''}`}
          onClick={() => setActiveTab('switches')}
        >
          🌐 SAN Switches & Fabrics
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'wwn' ? 'active' : ''}`}
          onClick={() => setActiveTab('wwn')}
        >
          🏷️ WWNN vs. WWPN
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'zoning' ? 'active' : ''}`}
          onClick={() => setActiveTab('zoning')}
        >
          🔒 Conceitos de Zoneamento
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'fos_cli' ? 'active' : ''}`}
          onClick={() => setActiveTab('fos_cli')}
        >
          ⚙️ Passo a Passo no Fabric OS (CLI)
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">

        {/* ABA 1: SWITCHES E FABRICS */}
        {activeTab === 'switches' && (
          <section>
            <h2 className="subtopic-pane-title">O Papel do SAN Switch na Infraestrutura de Storage</h2>
            <p className="subtopic-pane-intro">
              Diferente de redes Ethernet comutadas convencionais, a rede Fibre Channel (FC) utiliza switches SAN dedicados (Brocade/Broadcom) para criar uma malha de altíssima velocidade, baixa latência e com garantia de entrega de pacotes sem perdas (*lossless fabric*).
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Dual Fabric (Fabric A & Fabric B)</h3>
                  <p>Arquitetura em que dois switches (ou dois conjuntos de switches) operam de forma 100% isolada e sem comunicação entre si. Se um switch queimar ou for reiniciado, o outro assume todo o tráfego sem interrupção.</p>
                </div>
                <div className="subtopic-card-footer">Alta Disponibilidade</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Broadcom Fabric OS (FOS)</h3>
                  <p>Sistema operacional embarcado nos switches Brocade. Responsável pelo controle de portas (F_Port, E_Port), roteamento interno via FSPF, monitoramento de SFP óptico e gerenciamento de banco de zoneamento.</p>
                </div>
                <div className="subtopic-card-footer">Sistema Operacional FOS</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Tipos de Portas FC</h3>
                  <p>• <strong>N_Port:</strong> Porta do dispositivo final (HBA do servidor ou controladora do storage).<br />
                  • <strong>F_Port (Fabric Port):</strong> Porta do switch conectada a um nó final.<br />
                  • <strong>E_Port (Expansion Port):</strong> Conecta dois switches SAN entre si (ISL - Inter-Switch Link).</p>
                </div>
                <div className="subtopic-card-footer">Topologia de Portas</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: WWNN VS WWPN */}
        {activeTab === 'wwn' && (
          <section>
            <h2 className="subtopic-pane-title">Identificação de Dispositivos: WWN (World Wide Name)</h2>
            <p className="subtopic-pane-intro">
              No ecossistema Fibre Channel, não existem endereços IP nem MACs comuns. Cada dispositivo e porta física possui um identificador hexadecimal exclusivo global de 64 bits (8 octetos / 16 dígitos).
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Termo</th>
                    <th>Definição</th>
                    <th>Analogia</th>
                    <th>Exemplo de Formato</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>WWNN</strong> (Node Name)</td>
                    <td>Identifica o nó/chassi físico completo (a placa HBA inteira ou o controlador do storage).</td>
                    <td>O CPF/Identidade da placa física como um todo.</td>
                    <td><code>20:00:00:25:B5:11:22:33</code></td>
                  </tr>
                  <tr>
                    <td><strong>WWPN</strong> (Port Name)</td>
                    <td>Identifica <strong>cada porta física individual</strong> da HBA conectada ao cabo óptico.</td>
                    <td>O endereço/porta específica onde o cabo é plugado.</td>
                    <td><code>10:00:00:25:B5:AA:BB:CC</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Regra de Ouro do Zoneamento</h4>
                <p>O zoneamento de segurança é <strong>SEMPRE feito utilizando o WWPN</strong> (Port Name) e nunca o WWNN. Cada porta da HBA do servidor deve ser zoneada individualmente com a porta da controladora de storage correspondente no switch correto.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 3: CONCEITOS DE ZONEAMENTO */}
        {activeTab === 'zoning' && (
          <section>
            <h2 className="subtopic-pane-title">Segurança e Isolamento: O que é Zoneamento (Zoning)?</h2>
            <p className="subtopic-pane-intro">
              O **Zoneamento** é o mecanismo de segurança do switch SAN que define quais dispositivos têm autorização para enxergar e trocar quadros FC entre si. Dispositivos fora da mesma zona não conseguem sequer detectar a presença um do outro.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Single-Initiator Zoning (Boas Práticas)</h3>
                  <p>Cada zona deve conter <strong>apenas 1 Iniciador (porta do servidor/HBA)</strong> e 1 ou mais Targets (portas de controladoras do storage). Nunca agrupe servidores diferentes na mesma zona para evitar tempestades de RSCN (*Registered State Change Notifications*).</p>
                </div>
                <div className="subtopic-card-footer">Padrão da Indústria</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Soft Zoning (Por WWPN)</h3>
                  <p>Zoneamento baseado no endereço WWPN dos dispositivos. Se o cabo de fibra for trocado de porta física no mesmo switch, a comunicação continua funcionando normalmente sem quebras.</p>
                </div>
                <div className="subtopic-card-footer">Recomendado / Flexível</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Hard Zoning (Por Porta Física)</h3>
                  <p>Zoneamento amarrado ao número da porta física do switch (ex.: Porta 0 com Porta 5). Menos flexível, pois se o cabo for movido de porta física, o acesso cai.</p>
                </div>
                <div className="subtopic-card-footer">Baseado em Porta</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Redução de Broadcasts (RSCN)</h4>
                <p>O zoneamento restringe as notificações de mudança de estado (RSCN). Quando um servidor reinicia, apenas os storages com os quais ele possui zona ativa são notificados, protegendo o restante do Data Center contra interrupções de I/O.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: PASSO A PASSO NO FOS */}
        {activeTab === 'fos_cli' && (
          <section>
            <h2 className="subtopic-pane-title">Configuração Prática no Brocade Fabric OS (CLI)</h2>
            <p className="subtopic-pane-intro">
              A hierarquia de configuração do Brocade segue 4 passos obrigatórios: **Criar Aliases** ➡️ **Criar a Zone** ➡️ **Adicionar à Configuração (Config)** ➡️ **Salvar e Ativar (cfgEnable / cfgSave)**.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Etapa</th>
                    <th>Comando Brocade FOS</th>
                    <th>Objetivo / Explicação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. Criar Aliases</strong></td>
                    <td><code>alicreate "SRV_VMWARE01_HBA0", "10:00:00:25:B5:AA:11:01"</code><br /><code>alicreate "STORAGE_DELL_SPA0", "50:06:01:60:BE:A0:01:FF"</code></td>
                    <td>Cria apelidos amigáveis e legíveis para os WWPNs difíceis de memorizar.</td>
                  </tr>
                  <tr>
                    <td><strong>2. Criar a Zona</strong></td>
                    <td><code>zonecreate "Z_SRV_VMWARE01_DELL_SPA", "SRV_VMWARE01_HBA0; STORAGE_DELL_SPA0"</code></td>
                    <td>Agrupa o iniciador (servidor) e o target (storage) em uma zona lógica isolada.</td>
                  </tr>
                  <tr>
                    <td><strong>3. Inserir na Config</strong></td>
                    <td><code>cfgadd "PROD_FABRIC_CFG", "Z_SRV_VMWARE01_DELL_SPA"</code></td>
                    <td>Adiciona a nova zona criada ao conjunto de configurações ativo do switch.</td>
                  </tr>
                  <tr>
                    <td><strong>4. Ativar e Salvar</strong></td>
                    <td><code>cfgenable "PROD_FABRIC_CFG"</code><br /><code>cfgsave</code></td>
                    <td>Aplica as regras em memória na malha FC e salva permanentemente na flash do switch.</td>
                  </tr>
                  <tr>
                    <td><strong>5. Verificação</strong></td>
                    <td><code>switchshow</code> ou <code>zoneshow</code></td>
                    <td>Verifica status das portas físicas (Online) e zonas ativas (Effective Configuration).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Cuidado ao Executar cfgEnable</h4>
                <p>O comando <code>cfgenable</code> substitui a configuração em execução pela informada. Sempre verifique com <code>cfgshow</code> se nenhuma zona pré-existente foi removida acidentalmente antes de ativar.</p>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>Valide seu aprendizado sobre switches Brocade, WWPNs, Single-Initiator Zoning e comandos do Fabric OS no módulo de exercícios.</p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
