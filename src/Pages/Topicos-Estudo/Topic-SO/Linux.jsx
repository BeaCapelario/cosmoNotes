import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../subtopic-layout.css";

export default function LinuxServer() {
  const [activeTab, setActiveTab] = useState('cli');

  return (
    <article className="subtopic-container">
      {/* 1. Cabeçalho Padronizado com Breadcrumb */}
      <header className="subtopic-header">
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/sistemas-operacionais">Sistemas Operacionais</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">Linux Server (RHEL & Ubuntu)</span>
        </nav>

        <span className="subtopic-badge">Módulo 2: Sistemas Operacionais & Gerenciamento</span>
        <h1 className="subtopic-title">Administração de Servidores Linux</h1>
        <p className="subtopic-description">
          Operação em linha de comando (CLI), gerenciamento de pacotes nas famílias Debian/Ubuntu e RHEL/CentOS, 
          modelo de permissões POSIX, controle de serviços com systemd e administração remota segura via SSH.
        </p>
      </header>

      {/* 2. Barra de Abas */}
      <nav className="subtopic-tabs-nav">
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'cli' ? 'active' : ''}`}
          onClick={() => setActiveTab('cli')}
        >
          💻 CLI & Navegação
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'packages' ? 'active' : ''}`}
          onClick={() => setActiveTab('packages')}
        >
          📦 Pacotes (APT vs DNF)
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'permissions' ? 'active' : ''}`}
          onClick={() => setActiveTab('permissions')}
        >
          🔒 Permissões & chmod
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'systemd' ? 'active' : ''}`}
          onClick={() => setActiveTab('systemd')}
        >
          ⚙️ Serviços & systemd
        </button>
        <button 
          type="button"
          className={`subtopic-tab-btn ${activeTab === 'ssh' ? 'active' : ''}`}
          onClick={() => setActiveTab('ssh')}
        >
          🔑 Conexão Segura SSH
        </button>
      </nav>

      {/* 3. Conteúdo Dinâmico */}
      <main className="subtopic-pane">

        {/* ABA 1: CLI E NAVEGAÇÃO */}
        {activeTab === 'cli' && (
          <section>
            <h2 className="subtopic-pane-title">Linha de Comando (CLI) & Estrutura de Diretórios</h2>
            <p className="subtopic-pane-intro">
              O Linux segue o padrão <strong>FHS (Filesystem Hierarchy Standard)</strong>, onde tudo nasce a partir da raiz (<code>/</code>). Dominar a navegação e manipulação de arquivos é a base da administração do sistema.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Diretórios Principais (FHS)</h3>
                  <p><code>/etc</code> (arquivos de configuração globais), <code>/var/log</code> (logs do sistema e serviços), <code>/home</code> (diretórios dos usuários) e <code>/opt</code> (softwares de terceiros).</p>
                </div>
                <div className="subtopic-card-footer">Hierarquia do Sistema</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Navegação & Inspeção</h3>
                  <p>Comandos fundamentais: <code>pwd</code> (caminho atual), <code>cd</code> (navegar), <code>ls -lah</code> (listar detalhes e ocultos), <code>cat</code> e <code>less</code> (leitura de arquivos).</p>
                </div>
                <div className="subtopic-card-footer">Manipulação Básica</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Filtros & Monitoramento</h3>
                  <p>Comandos de busca e análise: <code>grep -rn "termo" .</code> (busca recursiva), <code>tail -f /var/log/syslog</code> (acompanhamento de logs em tempo real) e <code>top / htop</code> (processos).</p>
                </div>
                <div className="subtopic-card-footer">Diagnóstico de Logs</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 2: GERENCIAMENTO DE PACOTES */}
        {activeTab === 'packages' && (
          <section>
            <h2 className="subtopic-pane-title">Gerenciadores de Pacotes: APT vs. DNF/YUM</h2>
            <p className="subtopic-pane-intro">
              Distribuições baseadas em Debian (Ubuntu) utilizam pacotes <code>.deb</code> gerenciados por <code>apt</code>, enquanto distribuições Red Hat (RHEL, Rocky Linux, Fedora) utilizam <code>.rpm</code> gerenciados por <code>dnf/yum</code>.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Operação</th>
                    <th>Ubuntu / Debian (APT)</th>
                    <th>Red Hat / Rocky (DNF / YUM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Atualizar lista de repositórios</strong></td>
                    <td><code>sudo apt update</code></td>
                    <td><code>sudo dnf check-update</code></td>
                  </tr>
                  <tr>
                    <td><strong>Atualizar todos os pacotes</strong></td>
                    <td><code>sudo apt upgrade -y</code></td>
                    <td><code>sudo dnf upgrade -y</code></td>
                  </tr>
                  <tr>
                    <td><strong>Instalar um novo pacote</strong></td>
                    <td><code>sudo apt install &lt;pacote&gt;</code></td>
                    <td><code>sudo dnf install &lt;pacote&gt;</code></td>
                  </tr>
                  <tr>
                    <td><strong>Remover um pacote</strong></td>
                    <td><code>sudo apt remove &lt;pacote&gt;</code></td>
                    <td><code>sudo dnf remove &lt;pacote&gt;</code></td>
                  </tr>
                  <tr>
                    <td><strong>Buscar pacotes disponíveis</strong></td>
                    <td><code>apt search &lt;termo&gt;</code></td>
                    <td><code>dnf search &lt;termo&gt;</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ABA 3: PERMISSÕES & CHMOD */}
        {activeTab === 'permissions' && (
          <section>
            <h2 className="subtopic-pane-title">Modelo de Permissões POSIX & Propriedade</h2>
            <p className="subtopic-pane-intro">
              Cada arquivo ou diretório possui 3 níveis de permissão: <strong>User (Dono)</strong>, <strong>Group (Grupo)</strong> e <strong>Others (Outros)</strong>, divididos em Leitura (r=4), Escrita (w=2) e Execução (x=1).
            </p>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Notação Octal Comum</h4>
                <p><strong>755 (rwxr-xr-x):</strong> Dono faz tudo; grupo e outros apenas leem e executam (ideal para scripts e pastas públicas).<br />
                <strong>644 (rw-r--r--):</strong> Dono lê/escreve; grupo e outros apenas leem (padrão de arquivos de texto/configuração).</p>
              </div>

              <div className="subtopic-alert subtopic-alert-warning">
                <h4>⚠️ Permissões Críticas de Segurança</h4>
                <p><strong>600 (rw-------):</strong> Apenas o dono lê e escreve (obrigatório para chaves privadas SSH e certificados).<br />
                <strong>777 (rwxrwxrwx):</strong> Todos têm acesso total. Evite em ambientes de produção!</p>
              </div>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>chmod (Change Mode)</h3>
                  <p>Altera as permissões de acesso. Exemplos: <code>chmod 755 script.sh</code> ou <code>chmod -R 644 /var/www/html/</code>.</p>
                </div>
                <div className="subtopic-card-footer">Permissões de Acesso</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>chown (Change Owner)</h3>
                  <p>Modifica o usuário dono e o grupo associado ao arquivo. Exemplo: <code>sudo chown -R www-data:www-data /var/www/</code>.</p>
                </div>
                <div className="subtopic-card-footer">Propriedade de Arquivos</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 4: SERVIÇOS E SYSTEMD */}
        {activeTab === 'systemd' && (
          <section>
            <h2 className="subtopic-pane-title">Gerenciador de Inicialização & Serviços (systemd)</h2>
            <p className="subtopic-pane-intro">
              O <strong>systemd</strong> é o processo de inicialização padrão (PID 1) nas distribuições modernas. Ele controla daemons, pontos de montagem e recursos do sistema através de unidades (<em>units</em>).
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Controle com systemctl</h3>
                  <p>Gerenciamento do ciclo de vida dos serviços:<br />
                  • <code>systemctl start &lt;serviço&gt;</code> (iniciar agora)<br />
                  • <code>systemctl enable &lt;serviço&gt;</code> (iniciar no boot)<br />
                  • <code>systemctl status &lt;serviço&gt;</code> (verificar integridade)</p>
                </div>
                <div className="subtopic-card-footer">Gerenciamento de Daemons</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Auditoria com journalctl</h3>
                  <p>Leitura centralizada dos logs binários do systemd:<br />
                  • <code>journalctl -u nginx.service -f</code> (logs em tempo real)<br />
                  • <code>journalctl -xe</code> (detalhes de falhas de inicialização)</p>
                </div>
                <div className="subtopic-card-footer">Logs Centralizados</div>
              </div>
            </div>
          </section>
        )}

        {/* ABA 5: SSH SEGURO */}
        {activeTab === 'ssh' && (
          <section>
            <h2 className="subtopic-pane-title">Acesso Remoto Seguro via SSH (Secure Shell)</h2>
            <p className="subtopic-pane-intro">
              O protocolo SSH (porta padrão TCP 22) é a principal ferramenta de administração remota criptografada para servidores Linux.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>Autenticação por Par de Chaves</h3>
                  <p>Mais seguro que senhas simples. Gera um par de chaves assimétricas na máquina local: <code>ssh-keygen -t ed25519</code> e transfere a chave pública ao servidor com <code>ssh-copy-id usuario@servidor</code>.</p>
                </div>
                <div className="subtopic-card-footer">Criptografia Assimétrica</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Hardening do sshd_config</h3>
                  <p>Boas práticas no arquivo <code>/etc/ssh/sshd_config</code>:<br />
                  • Desabilitar login direto do root (<code>PermitRootLogin no</code>)<br />
                  • Exigir autenticação por chaves (<code>PasswordAuthentication no</code>)</p>
                </div>
                <div className="subtopic-card-footer">Boas Práticas de Segurança</div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 4. Rodapé Padrão de CTA */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para testar seus conhecimentos?</h3>
          <p>Valide seu aprendizado sobre comandos Linux, permissões, gerenciamento de pacotes, systemd e SSH no módulo de exercícios.</p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
