import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../subtopic-layout.css";

export default function OpenStack() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <article className="subtopic-container">
      {/* 1. Cabeçalho Padronizado com Breadcrumb */}
      <header className="subtopic-header">
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/nuvem">Cloud Computing</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">OpenStack (Nuvem Privada)</span>
        </nav>

        <span className="subtopic-badge">Módulo 5: Computação em Nuvem (Cloud)</span>
        <h1 className="subtopic-title">Orquestração de Nuvem Privada com OpenStack</h1>
        <p className="subtopic-description">
          Compreenda como o OpenStack transforma servidores físicos em uma nuvem privada IaaS escalável, 
          explorando seus componentes modulares: Keystone (identidade), Nova (computação) e Neutron (redes).
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          🏛️ O que é OpenStack?
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'keystone' ? 'active' : ''}`}
          onClick={() => setActiveTab('keystone')}
        >
          🔑 Keystone (Identidade)
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'nova' ? 'active' : ''}`}
          onClick={() => setActiveTab('nova')}
        >
          ⚡ Nova (Computação)
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'neutron' ? 'active' : ''}`}
          onClick={() => setActiveTab('neutron')}
        >
          🌐 Neutron (Redes & SDN)
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'ecosystem' ? 'active' : ''}`}
          onClick={() => setActiveTab('ecosystem')}
        >
          📦 Ecossistema Modular
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">

        {/* ABA 1: O QUE É OPENSTACK */}
        {activeTab === 'overview' && (
          <section>
            <h2 className="subtopic-pane-title">OpenStack como Orquestrador de Nuvem Privada (IaaS)</h2>
            <p className="subtopic-pane-intro">
              O <strong>OpenStack</strong> é uma plataforma de software livre e de código aberto (*open source*) que permite a empresas construírem sua própria nuvem pública ou privada sobre servidores x86 convencionais, fornecendo APIs unificadas compatíveis com os principais padrões de mercado.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Arquitetura Totalmente Modular</h3>
                  <p>Cada função da nuvem (computação, rede, autenticação, armazenamento) é executada por um serviço independente que se comunica via chamadas REST API autenticadas e filas de mensagens (RabbitMQ).</p>
                </div>
                <div className="subtopic-card-footer">Microserviços & REST API</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Sem Vendor Lock-in</h3>
                  <p>Permite criar uma infraestrutura elástica sem ficar dependente de licenças de software proprietárias de virtualização ou fornecedores exclusivos de nuvem pública.</p>
                </div>
                <div className="subtopic-card-footer">Software Livre & Aberto</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Controle Multi-Tenant (Projetos)</h3>
                  <p>Isolamento rigoroso entre múltiplos departamentos ou clientes (Tenants/Projects), com cotas independentes de vCPU, memória RAM, endereços IP e armazenamento.</p>
                </div>
                <div className="subtopic-card-footer">Isolamento Multi-Tenant</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Como os Módulos se Comunicam?</h4>
                <p>Todos os serviços do OpenStack são descentralizados. Quando um usuário solicita a criação de uma VM, o <strong>Keystone</strong> autentica o pedido, o <strong>Nova</strong> aloca a computação, o <strong>Neutron</strong> cria a placa de rede e o <strong>Glance</strong> fornece a imagem do sistema operacional.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: KEYSTONE */}
        {activeTab === 'keystone' && (
          <section>
            <h2 className="subtopic-pane-title">Keystone: Serviço de Identidade e Autenticação</h2>
            <p className="subtopic-pane-intro">
              O <strong>Keystone</strong> é a porta de entrada obrigatória de todo o ambiente OpenStack. Nenhum comando ou requisição de API é processado sem antes ser validado e autenticado por ele.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Autenticação & Tokens (Fernet)</h3>
                  <p>Valida credenciais de usuários e gera tokens criptografados temporários que devem ser incluídos no cabeçalho de todas as chamadas subsequentes para os outros módulos.</p>
                </div>
                <div className="subtopic-card-footer">Segurança & Sessão</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Catálogo de Serviços (Service Catalog)</h3>
                  <p>Mantém a lista oficial de todos os serviços ativos da nuvem e seus respectivos endereços de acesso (Endpoints públicos, internos e de administração).</p>
                </div>
                <div className="subtopic-card-footer">Roteamento de APIs</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>RBAC & Políticas de Acesso</h3>
                  <p>Controle granular de permissões baseado em papéis (Roles) associados a Usuários dentro de Projetos/Tenants ou Domínios.</p>
                </div>
                <div className="subtopic-card-footer">Controle de Acesso</div>
              </div>
            </div>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Conceito Keystone</th>
                    <th>Definição</th>
                    <th>Exemplo Prático</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>User</strong></td>
                    <td>A entidade digital que realiza ações na nuvem.</td>
                    <td><code>maria.silva</code> ou uma conta de serviço como <code>nova-user</code>.</td>
                  </tr>
                  <tr>
                    <td><strong>Project / Tenant</strong></td>
                    <td>Grupo de recursos isolados onde as instâncias e redes residem.</td>
                    <td><code>Projeto_Financeiro</code> ou <code>Ambiente_Dev</code>.</td>
                  </tr>
                  <tr>
                    <td><strong>Role</strong></td>
                    <td>Conjunto de permissões atribuídas a um usuário em um projeto.</td>
                    <td><code>admin</code>, <code>member</code> ou <code>reader</code>.</td>
                  </tr>
                  <tr>
                    <td><strong>Endpoint</strong></td>
                    <td>URL de rede onde um serviço REST do OpenStack responde.</td>
                    <td><code>https://openstack.corp:8774/v2.1</code> (API do Nova).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ABA 3: NOVA */}
        {activeTab === 'nova' && (
          <section>
            <h2 className="subtopic-pane-title">Nova: Orquestração de Computação e Ciclo de Vida de VMs</h2>
            <p className="subtopic-pane-intro">
              O <strong>Nova</strong> é responsável por gerenciar o ciclo de vida das instâncias de computação (criar, ligar, pausar, migrar e destruir máquinas virtuais) distribuídas pelos nós físicos de computação (Compute Nodes).
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>nova-api</h3>
                  <p>Recebe e valida as requisições de criação e controle de instâncias enviadas pelos usuários ou pela interface web.</p>
                </div>
                <div className="subtopic-card-footer">Ponto de Entrada API</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>nova-scheduler</h3>
                  <p>O cérebro decisor: analisa os nós físicos disponíveis no cluster e seleciona o melhor servidor para hospedar a nova VM com base em filtros de memória, CPU e afinidade.</p>
                </div>
                <div className="subtopic-card-footer">Algoritmo de Alocação</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>nova-compute</h3>
                  <p>Daemon instalado em cada nó físico de computação. Comunica-se diretamente com o hipervisor local (comumente <strong>KVM / QEMU</strong> via <code>libvirt</code>) para inicializar a VM.</p>
                </div>
                <div className="subtopic-card-footer">Integração com Hipervisor</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Flavors (Tipos de Instância)</h3>
                  <p>Modelos predefinidos de dimensionamento de hardware virtual que determinam a quantidade de vCPUs, memória RAM e tamanho de disco raiz (ex.: <code>m1.small</code>, <code>m1.large</code>).</p>
                </div>
                <div className="subtopic-card-footer">Dimensionamento de VM</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: NEUTRON */}
        {activeTab === 'neutron' && (
          <section>
            <h2 className="subtopic-pane-title">Neutron: Redes Virtuais Definidas por Software (SDN)</h2>
            <p className="subtopic-pane-intro">
              O <strong>Neutron</strong> entrega o conceito de <em>Networking as a Service (NaaS)</em>, permitindo que cada projeto crie suas próprias topologias de rede completas de forma virtual, sem alterar cabos físicos.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Redes de Tenant (Overlay Networks)</h3>
                  <p>Criação de sub-redes privadas isoladas com encapsulamento <strong>Geneve</strong>, <strong>VXLAN</strong> ou VLANs, permitindo que projetos diferentes usem a mesma faixa de IP sem conflito.</p>
                </div>
                <div className="subtopic-card-footer">Isolamento de Tráfego</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Roteadores Virtuais & NAT</h3>
                  <p>Roteamento lógico L3 entre sub-redes do projeto e saída para a rede externa com SNAT (Source NAT).</p>
                </div>
                <div className="subtopic-card-footer">Roteamento Dinâmico L3</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Floating IPs (IPs Flutuantes)</h3>
                  <p>Endereços IP públicos ou corporativos roteáveis que podem ser atribuídos dinamicamente a uma VM para permitir acesso externo direto via DNAT.</p>
                </div>
                <div className="subtopic-card-footer">Acesso Externo</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Security Groups (Micro-Segmentação)</h3>
                  <p>Firewalls virtuais com inspeção de estado aplicados diretamente na interface de rede virtual (port) da VM, controlando portas TCP/UDP e protocolos autorizados.</p>
                </div>
                <div className="subtopic-card-footer">Firewall de Borda da VM</div>
              </div>
            </div>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Open vSwitch (OVS) & OVN</h4>
                <p>O Neutron gerencia switches virtuais programáveis como o <strong>Open vSwitch (OVS)</strong> ou <strong>OVN (Open Virtual Network)</strong> nos nós físicos para direcionar os pacotes de rede com aceleração em nível de kernel.</p>
              </div>
            </div>
          </section>
        )}

        {/* ABA 5: ECOSSISTEMA MODULAR */}
        {activeTab === 'ecosystem' && (
          <section>
            <h2 className="subtopic-pane-title">Módulos Complementares do Ecossistema OpenStack</h2>
            <p className="subtopic-pane-intro">
              Além de Keystone, Nova e Neutron, uma nuvem OpenStack completa integra módulos adicionais de armazenamento, imagens e interface gráfica.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Nome do Serviço</th>
                    <th>Codinome</th>
                    <th>Responsabilidade Principal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Image Service</strong></td>
                    <td><strong>Glance</strong></td>
                    <td>Repositório e catálogo de imagens de sistemas operacionais (QCOW2, RAW, ISO) usadas para criar novas instâncias.</td>
                  </tr>
                  <tr>
                    <td><strong>Block Storage</strong></td>
                    <td><strong>Cinder</strong></td>
                    <td>Gerencia volumes de disco persistentes em bloco conectados via iSCSI, FC ou Ceph RBD para as VMs.</td>
                  </tr>
                  <tr>
                    <td><strong>Dashboard GUI</strong></td>
                    <td><strong>Horizon</strong></td>
                    <td>Interface gráfica web para administradores e usuários gerenciarem todos os recursos da nuvem pelo navegador.</td>
                  </tr>
                  <tr>
                    <td><strong>Object Storage</strong></td>
                    <td><strong>Swift</strong></td>
                    <td>Armazenamento escalável de objetos distribuídos não estruturados (equivalente ao Amazon S3).</td>
                  </tr>
                  <tr>
                    <td><strong>Orquestração / Templates</strong></td>
                    <td><strong>Heat</strong></td>
                    <td>Motor de automação de infraestrutura como código (IaC) baseado em templates declarativos YAML (HOT templates).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Horizon (Console Web)</h3>
                  <p>Portal web intuitivo onde os desenvolvedores podem iniciar instâncias, anexar volumes do Cinder, associar Floating IPs e monitorar cotas em tempo real.</p>
                </div>
                <div className="subtopic-card-footer">Interface do Usuário</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Integração com Ceph</h3>
                  <p>O Ceph é o storage de backend mais utilizado com OpenStack, servindo simultaneamente como pool de imagens para o Glance e armazenamento de blocos para o Cinder.</p>
                </div>
                <div className="subtopic-card-footer">Storage Unificado</div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>Valide seu aprendizado sobre orquestração de nuvem privada com OpenStack, Keystone, Nova e Neutron no módulo de exercícios.</p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
