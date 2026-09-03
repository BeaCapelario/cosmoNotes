import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../subtopic-layout.css";

export default function WindowsServer() {
  const [activeTab, setActiveTab] = useState('ad');

  return (
    <article className="subtopic-container">
      {/* 1. Cabeçalho Padronizado com Breadcrumb */}
      <header className="subtopic-header">
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/sistemas-operacionais">Sistemas Operacionais</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">Windows Server & AD DS</span>
        </nav>

        <span className="subtopic-badge">Módulo 2: Sistemas Operacionais & Gerenciamento</span>
        <h1 className="subtopic-title">Administração de Windows Server</h1>
        <p className="subtopic-description">
          Gerenciamento centralizado de identidades com Active Directory (AD DS), serviços de infraestrutura 
          de rede (DNS & DHCP) e automação de tarefas administrativas via PowerShell.
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'ad' ? 'active' : ''}`}
          onClick={() => setActiveTab('ad')}
        >
          👥 Active Directory (AD DS)
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'dns' ? 'active' : ''}`}
          onClick={() => setActiveTab('dns')}
        >
          🌐 Serviço de DNS
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'dhcp' ? 'active' : ''}`}
          onClick={() => setActiveTab('dhcp')}
        >
          📡 Servidor DHCP
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'powershell' ? 'active' : ''}`}
          onClick={() => setActiveTab('powershell')}
        >
          ⚡ Automação com PowerShell
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">

        {/* ABA 1: ACTIVE DIRECTORY */}
        {activeTab === 'ad' && (
          <section>
            <h2 className="subtopic-pane-title">Active Directory Domain Services (AD DS)</h2>
            <p className="subtopic-pane-intro">
              O serviço de diretório da Microsoft centraliza a autenticação, controle de acesso e políticas de segurança para todos os usuários, grupos e computadores da organização.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Organizational Units (OUs)</h3>
                  <p>Contêineres lógicos usados para organizar usuários, computadores e outros grupos de forma hierárquica (ex.: por departamento ou filial) e aplicar Group Policies (GPOs).</p>
                </div>
                <div className="subtopic-card-footer">Estrutura Lógica</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Contas de Usuários & Grupos</h3>
                  <p>Gerenciamento de credenciais centralizadas e definição de grupos de segurança (Security Groups) para concessão simplificada de permissões a pastas e recursos compartilhados.</p>
                </div>
                <div className="subtopic-card-footer">Identidade & Acesso</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Domain Controllers (DCs)</h3>
                  <p>Servidores que executam a função do AD DS e replicam entre si a base de dados do diretório (<code>ntds.dit</code>) e os compartilhamentos de políticas (<code>SYSVOL</code>).</p>
                </div>
                <div className="subtopic-card-footer">Controladores de Domínio</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: SERVIÇO DE DNS */}
        {activeTab === 'dns' && (
          <section>
            <h2 className="subtopic-pane-title">DNS Server (Domain Name System)</h2>
            <p className="subtopic-pane-intro">
              O DNS é a espinha dorsal do Windows Server e do AD DS, responsável por resolver nomes de domínio (FQDN) em endereços IP e localizar controladores de domínio por registros SRV.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Tipo de Registro</th>
                    <th>Nome Técnico</th>
                    <th>Finalidade / Função</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Host (A / AAAA)</strong></td>
                    <td>Address Record</td>
                    <td>Mapeia um nome de host diretamente para um endereço IPv4 (A) ou IPv6 (AAAA).</td>
                  </tr>
                  <tr>
                    <td><strong>Alias (CNAME)</strong></td>
                    <td>Canonical Name</td>
                    <td>Cria um apelido/redirecionamento que aponta para outro registro de host já existente.</td>
                  </tr>
                  <tr>
                    <td><strong>Serviço (SRV)</strong></td>
                    <td>Service Locator</td>
                    <td>Permite que clientes do domínio localizem automaticamente serviços críticos (ex.: autenticação LDAP e Kerberos).</td>
                  </tr>
                  <tr>
                    <td><strong>Ponteiro (PTR)</strong></td>
                    <td>Pointer Record</td>
                    <td>Usado em Zonas de Pesquisa Inversa para resolver um endereço IP de volta ao seu nome FQDN.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Active Directory-Integrated Zones</h4>
                <p>Armazena as zonas DNS dentro da própria base de dados do Active Directory, garantindo replicação segura e criptografada entre todos os DCs da rede.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 3: SERVIDOR DHCP */}
        {activeTab === 'dhcp' && (
          <section>
            <h2 className="subtopic-pane-title">DHCP Server (Dynamic Host Configuration Protocol)</h2>
            <p className="subtopic-pane-intro">
              Automatiza a distribuição dinâmica de endereços IP, máscaras de sub-rede, gateways padrão e servidores DNS para as estações de trabalho e dispositivos da rede.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Escopos (Scopes)</h3>
                  <p>Faixa contígua de endereços IP (Pool) que o servidor DHCP está autorizado a distribuir para uma sub-rede específica da rede local.</p>
                </div>
                <div className="subtopic-card-footer">Pool de Endereçamento</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Reservas (Reservations)</h3>
                  <p>Associação fixa de um endereço IP específico ao endereço físico (MAC Address) de uma placa de rede, garantindo que servidores e impressoras recebam sempre o mesmo IP.</p>
                </div>
                <div className="subtopic-card-footer">IP Fixo via MAC</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Opções de Escopo (Scope Options)</h3>
                  <p>Parâmetros adicionais entregues automaticamente aos clientes junto com o IP: Router/Gateway (Opção 003), Servidor DNS (Opção 006) e Nome do Domínio (Opção 015).</p>
                </div>
                <div className="subtopic-card-footer">Configuração de Rede</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Autorização no Active Directory</h4>
                <p>Em ambientes corporativos com domínio, um servidor DHCP Windows precisa ser explicitamente autorizado no AD para começar a responder a requisições de clientes, prevenindo Rogue DHCP Servers.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: POWERSHELL */}
        {activeTab === 'powershell' && (
          <section>
            <h2 className="subtopic-pane-title">Automação com Windows PowerShell</h2>
            <p className="subtopic-pane-intro">
              O PowerShell é a linguagem de script e shell orientada a objetos da Microsoft, baseada na estrutura <code>Verbo-Substantivo</code> para gerenciar e automatizar servidores em escala.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Comando (Cmdlet)</th>
                    <th>Módulo / Área</th>
                    <th>Ação Executada</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>New-ADUser -Name "Ana Silva" -SamAccountName "asilva"</code></td>
                    <td>Active Directory</td>
                    <td>Cria uma nova conta de usuário no domínio corporativo.</td>
                  </tr>
                  <tr>
                    <td><code>Add-ADGroupMember -Identity "TI_Admins" -Members "asilva"</code></td>
                    <td>Active Directory</td>
                    <td>Adiciona o usuário especificado a um grupo de segurança do AD.</td>
                  </tr>
                  <tr>
                    <td><code>Get-Service -Name "w32time" | Restart-Service</code></td>
                    <td>Sistema / Serviços</td>
                    <td>Localiza e reinicia o serviço de sincronização de horário do Windows.</td>
                  </tr>
                  <tr>
                    <td><code>Get-DhcpServerv4Lease -ScopeId 192.168.1.0</code></td>
                    <td>DHCP</td>
                    <td>Lista todas as concessões de IP ativas em um escopo específico.</td>
                  </tr>
                  <tr>
                    <td><code>Test-NetConnection -ComputerName "srv01" -Port 3389</code></td>
                    <td>Diagnóstico de Rede</td>
                    <td>Testa a conectividade de rede e validação de porta aberta (ex.: RDP).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Pipeline de Objetos (|)</h3>
                  <p>Diferente de shells tradicionais baseados em texto puro, o PowerShell trafega objetos completos entre comandos, permitindo filtrar e manipular propriedades com facilidade (ex.: <code>Where-Object</code> e <code>Select-Object</code>).</p>
                </div>
                <div className="subtopic-card-footer">Orientação a Objetos</div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>Valide seu aprendizado sobre Active Directory, DNS, DHCP e cmdlets do PowerShell no módulo de exercícios.</p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
