import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../subtopic-layout.css";

export default function IaaSCloud() {
  const [activeTab, setActiveTab] = useState('iaas');

  return (
    <article className="subtopic-container">
      {/* 1. Cabeçalho Padronizado com Breadcrumb */}
      <header className="subtopic-header">
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/nuvem">Cloud Computing</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">Fundamentos de IaaS</span>
        </nav>

        <span className="subtopic-badge">Módulo 5: Computação em Nuvem (Cloud)</span>
        <h1 className="subtopic-title">Fundamentos de IaaS & Modelos de Nuvem</h1>
        <p className="subtopic-description">
          Compreenda o conceito de Infraestrutura como Serviço (IaaS), o modelo de responsabilidade compartilhada, 
          alocação elástica de recursos (CPU, RAM, Disco) e as distinções entre Nuvem Pública, Privada e Híbrida.
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'iaas' ? 'active' : ''}`}
          onClick={() => setActiveTab('iaas')}
        >
          ☁️ O que é IaaS?
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'shared_model' ? 'active' : ''}`}
          onClick={() => setActiveTab('shared_model')}
        >
          🤝 Responsabilidade Compartilhada
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'provisioning' ? 'active' : ''}`}
          onClick={() => setActiveTab('provisioning')}
        >
          ⚡ Recursos Sob Demanda & Elasticidade
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'models' ? 'active' : ''}`}
          onClick={() => setActiveTab('models')}
        >
          🌐 Pública, Privada e Híbrida
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'capex_opex' ? 'active' : ''}`}
          onClick={() => setActiveTab('capex_opex')}
        >
          💰 CapEx vs. OpEx
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">

        {/* ABA 1: O QUE É IAAS */}
        {activeTab === 'iaas' && (
          <section>
            <h2 className="subtopic-pane-title">Infraestrutura como Serviço (IaaS)</h2>
            <p className="subtopic-pane-intro">
              O **IaaS** é o modelo fundamental da computação em nuvem que fornece acesso sob demanda a recursos computacionais brutos — servidores virtuais, armazenamento em bloco, firewalls e redes lógicas — através da internet com cobrança baseada no uso.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Controle Total do Sistema Operacional</h3>
                  <p>Diferente de PaaS ou SaaS, no IaaS você tem controle administrativo completo (Root/Administrator) sobre o sistema operacional, configurações de rede, portas e middlewares instalados.</p>
                </div>
                <div className="subtopic-card-footer">Autonomia de Gestão</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Abstração do Hardware Físico</h3>
                  <p>O provedor de nuvem assume a manutenção do Data Center físico, energia, refrigeração, cabeamento de rede, servidores físicos e camada do hipervisor.</p>
                </div>
                <div className="subtopic-card-footer">Sem Gestão de Data Center</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Provisionamento Instantâneo via API / Console</h3>
                  <p>Servidores e volumes de armazenamento que antes levavam semanas para serem comprados e instalados podem ser instanciados em minutos via portal web, CLI ou IaC (Terraform).</p>
                </div>
                <div className="subtopic-card-footer">Agilidade & Automação</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: RESPONSABILIDADE COMPARTILHADA */}
        {activeTab === 'shared_model' && (
          <section>
            <h2 className="subtopic-pane-title">Modelo de Responsabilidade Compartilhada (Shared Responsibility)</h2>
            <p className="subtopic-pane-intro">
              A segurança na nuvem é uma via de mão dupla: o provedor é responsável pela **segurança DA nuvem**, enquanto o cliente é responsável pela **segurança NA nuvem**.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Camada de Infraestrutura</th>
                    <th>Tradicional (On-Premises)</th>
                    <th>IaaS (Ex: EC2, Azure VM, GCE)</th>
                    <th>PaaS (Ex: App Service, RDS)</th>
                    <th>SaaS (Ex: M365, Google Workspace)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Dados & Acessos (IAM)</strong></td>
                    <td>Cliente</td>
                    <td>Cliente</td>
                    <td>Cliente</td>
                    <td>Cliente</td>
                  </tr>
                  <tr>
                    <td><strong>Aplicações & Middlewares</strong></td>
                    <td>Cliente</td>
                    <td>Cliente</td>
                    <td>Cliente</td>
                    <td>Provedor</td>
                  </tr>
                  <tr>
                    <td><strong>Sistema Operacional & Patches</strong></td>
                    <td>Cliente</td>
                    <td>Cliente</td>
                    <td>Provedor</td>
                    <td>Provedor</td>
                  </tr>
                  <tr>
                    <td><strong>Hipervisor & Virtualização</strong></td>
                    <td>Cliente</td>
                    <td>Provedor</td>
                    <td>Provedor</td>
                    <td>Provedor</td>
                  </tr>
                  <tr>
                    <td><strong>Servidores Físicos & Storage</strong></td>
                    <td>Cliente</td>
                    <td>Provedor</td>
                    <td>Provedor</td>
                    <td>Provedor</td>
                  </tr>
                  <tr>
                    <td><strong>Data Center & Rede Física</strong></td>
                    <td>Cliente</td>
                    <td>Provedor</td>
                    <td>Provedor</td>
                    <td>Provedor</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ O que você gerencia em IaaS?</h4>
                <p>Em IaaS, a aplicação de patches de segurança no SO, configuração de antivírus, regras de firewall (Security Groups) e gestão de backups de dados continuam sendo responsabilidade <strong>exclusiva do cliente</strong>.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 3: PROVISIONAMENTO E ELASTICIDADE */}
        {activeTab === 'provisioning' && (
          <section>
            <h2 className="subtopic-pane-title">Provisionamento Sob Demanda & Elasticidade</h2>
            <p className="subtopic-pane-intro">
              Um dos maiores atrativos da nuvem é a capacidade de ajustar os recursos computacionais instantaneamente de acordo com a oscilação real de demanda dos usuários.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Computação (vCPUs & RAM)</h3>
                  <p>Instâncias dimensionadas em famílias otimizadas para: Uso Geral (General Purpose), Computação Intensiva (Compute Optimized) ou Grande Volume de RAM (Memory Optimized).</p>
                </div>
                <div className="subtopic-card-footer">Instâncias de VM</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Armazenamento em Bloco (Block Storage)</h3>
                  <p>Discos virtuais acoplados às instâncias (ex.: AWS EBS, Azure Managed Disks). Permitem redimensionamento dinâmico de tamanho e definição de IOPS provisionado.</p>
                </div>
                <div className="subtopic-card-footer">Discos Persistentes</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Redes Virtuais (VPC / VNet)</h3>
                  <p>Isolamento lógico completo da topologia de rede: sub-redes públicas/privadas, tabelas de rotas, Gateways de Internet (IGW) e balanceadores de carga (Load Balancers).</p>
                </div>
                <div className="subtopic-card-footer">Rede Definida por Software</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Elasticidade Horizontal (Scale-Out) vs. Vertical (Scale-Up)</h4>
                <p>
                  • <strong>Scale-Up (Vertical):</strong> Aumentar CPU/RAM de uma mesma VM (exige reinício).<br />
                  • <strong>Scale-Out (Horizontal):</strong> Adicionar automaticamente mais instâncias idênticas em paralelo usando <em>Auto Scaling Groups</em> (alta disponibilidade sem parada).
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: MODELOS DE NUVEM */}
        {activeTab === 'models' && (
          <section>
            <h2 className="subtopic-pane-title">Modelos de Implantação: Pública, Privada, Híbrida e Multi-Cloud</h2>
            <p className="subtopic-pane-intro">
              A estratégia de nuvem de uma empresa pode adotar diferentes modelos arquiteturais dependendo de requisitos regulatórios, segurança, custo e latência.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>🌐 Nuvem Pública (Public Cloud)</h3>
                  <p>Infraestrutura massiva de terceiros (AWS, Microsoft Azure, Google Cloud). Multi-tenant, altamente escalável e sem custos de aquisição inicial de hardware.</p>
                </div>
                <div className="subtopic-card-footer">Escala Global & Agilidade</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>🏢 Nuvem Privada (Private Cloud)</h3>
                  <p>Ambiente dedicado exclusivamente a uma única organização (Single-Tenant), hospedado em Data Center local próprio ou provedor especializado (OpenStack, VMware Cloud Foundation).</p>
                </div>
                <div className="subtopic-card-footer">Controle Estrito & Conformidade</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>🔀 Nuvem Híbrida (Hybrid Cloud)</h3>
                  <p>Interconexão segura (VPN IPsec / DirectConnect / ExpressRoute) entre o Data Center local (On-Premises) e a Nuvem Pública, permitindo migração e contingência de cargas de trabalho.</p>
                </div>
                <div className="subtopic-card-footer">O Melhor dos Dois Mundos</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>☁️ Multi-Cloud</h3>
                  <p>Estratégia que utiliza simultaneamente serviços de dois ou mais provedores de nuvem pública (ex.: AWS + Azure) para evitar dependência exclusiva de um único fornecedor (*Vendor Lock-in*).</p>
                </div>
                <div className="subtopic-card-footer">Mitigação de Riscos</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 5: CAPEX VS OPEX */}
        {activeTab === 'capex_opex' && (
          <section>
            <h2 className="subtopic-pane-title">Modelo Financeiro: Transição de CapEx para OpEx</h2>
            <p className="subtopic-pane-intro">
              A adoção de nuvem altera fundamentalmente a forma como as empresas investem em tecnologia da informação.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>CapEx (Capital Expenditure) — On-Premises</th>
                    <th>OpEx (Operational Expenditure) — Cloud IaaS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Investimento Inicial</strong></td>
                    <td>Alto investimento inicial na compra de servidores, no-breaks e storages.</td>
                    <td>Zero investimento prévio em hardware; início imediato.</td>
                  </tr>
                  <tr>
                    <td><strong>Modelo de Pagamento</strong></td>
                    <td>Custo fixo e amortizado contabilmente ao longo de 3 a 5 anos.</td>
                    <td>Pagamento conforme o consumo real (Pay-as-you-go / faturamento mensal).</td>
                  </tr>
                  <tr>
                    <td><strong>Previsão de Capacidade</strong></td>
                    <td>Risco de superdimensionamento (desperdício) ou subdimensionamento (falta de recursos).</td>
                    <td>Ajuste dinâmico de recursos em tempo real de acordo com picos sazonais de uso.</td>
                  </tr>
                  <tr>
                    <td><strong>Custos Acessórios</strong></td>
                    <td>Conta de energia elétrica, refrigeração, espaço físico e equipe de manutenção predial.</td>
                    <td>Custos de Data Center inclusos no valor por hora das instâncias.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 FinOps & Governança de Custos</h4>
                <p>Como recursos IaaS geram cobrança enquanto ligados, torna-se essencial adotar práticas de <strong>FinOps</strong>: desligamento automático de ambientes de homologação fora do horário comercial, reservas de instâncias (Reserved Instances / Savings Plans) e monitoramento de gastos via tags.</p>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>Valide seu aprendizado sobre fundamentos de IaaS, modelo de responsabilidade compartilhada e nuvem híbrida no módulo de exercícios.</p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
