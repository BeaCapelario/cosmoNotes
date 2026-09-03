import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../subtopic-layout.css";

export default function HardwareHPE() {
  const [activeTab, setActiveTab] = useState("proliant");

  return (
    <article className="subtopic-container">
      {/* Cabeçalho */}
      <header className="subtopic-header">
        {/* Breadcrumb */}
        <nav className="subtopic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Início</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <Link to="/hardware-virtualizacao">Hardware & Virtualização</Link>
          <span className="subtopic-breadcrumb-separator">/</span>
          <span className="subtopic-breadcrumb-current">Hardware HPE</span>
        </nav>

        <span className="subtopic-badge">
          Módulo 1: Hardware & Virtualização
        </span>
        <h1 className="subtopic-title">
          Servidores Corporativos & Hardware HPE
        </h1>
        <p className="subtopic-description">
          Entenda a arquitetura física dos servidores ProLiant, CPUs
          corporativas, mecanismos de proteção de memória ECC e a operação do
          HPE iLO.
        </p>
      </header>

      {/* Navegação por Abas */}
      <nav className="subtopic-tabs-nav">
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "proliant" ? "active" : ""}`}
          onClick={() => setActiveTab("proliant")}
        >
          🖥️ Linha ProLiant
        </button>
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "cpu" ? "active" : ""}`}
          onClick={() => setActiveTab("cpu")}
        >
          ⚡ Xeon vs. EPYC
        </button>
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "ecc" ? "active" : ""}`}
          onClick={() => setActiveTab("ecc")}
        >
          🛡️ Memória ECC
        </button>
        <button
          type="button"
          className={`subtopic-tab-btn ${activeTab === "ilo" ? "active" : ""}`}
          onClick={() => setActiveTab("ilo")}
        >
          🌐 Gerenciamento iLO
        </button>
      </nav>

      {/* Conteúdo das Abas */}
      <main className="subtopic-pane">
        {/* 1. LINHA PROLIANT */}
        {activeTab === "proliant" && (
          <section>
            <h2 className="subtopic-pane-title">
              Família de Servidores HPE ProLiant
            </h2>
            <p className="subtopic-pane-intro">
              Projetados para operação ininterrupta (24/7), contam com
              componentes
              <strong> Hot-Plug</strong> (fontes, ventoinhas e discos
              substituíveis sem desligar o equipamento).
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>DL (Density Line) — Rack</h3>
                  <p>
                    Otimizados para densidade de computação em Data Centers
                    (tamanhos padrão de 1U, 2U ou 4U em racks de 19").
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Destaque: DL360 e DL380
                </div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>ML (Modular Line) — Torre</h3>
                  <p>
                    Formato torre, silenciosos e expansíveis. Perfeitos para
                    filiais ou empresas sem sala de rack dedicada.
                  </p>
                </div>
                <div className="subtopic-card-footer">Destaque: ML350</div>
              </div>

              <div className="subtopic-card">
                <div>
                  <h3>Synergy / Blade — Lâminas</h3>
                  <p>
                    Módulos de computação que compartilham um chassi unificado
                    de energia, refrigeração e rede.
                  </p>
                </div>
                <div className="subtopic-card-footer">
                  Destaque: Synergy 480
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 2. CPUS CORPORATIVAS */}
        {activeTab === "cpu" && (
          <section>
            <h2 className="subtopic-pane-title">
              CPUs Corporativas: Intel Xeon vs. AMD EPYC
            </h2>
            <p className="subtopic-pane-intro">
              Ao contrário dos processadores domésticos, os chips de servidor
              são focados em
              <strong> paralelismo massivo</strong>, múltiplos canais de memória
              e muitas pistas PCIe diretas.
            </p>

            <div className="subtopic-table-wrapper">
              <table className="subtopic-table">
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Intel Xeon Scalable</th>
                    <th>AMD EPYC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Arquitetura</strong>
                    </td>
                    <td>Design Mesh / Multi-die modular</td>
                    <td>Chiplets (MCM com I/O central)</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Canais de Memória</strong>
                    </td>
                    <td>Até 8 canais por socket</td>
                    <td>Até 12 canais por socket</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Densidade de Cores</strong>
                    </td>
                    <td>Foco em performance por clock e instruções</td>
                    <td>Maior densidade de núcleos por socket</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Recursos Chave</strong>
                    </td>
                    <td>Intel AVX-512, AMX (IA), SGX</td>
                    <td>Infinity Fabric, alta densidade PCIe 5.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 3. MEMÓRIA ECC */}
        {activeTab === "ecc" && (
          <section>
            <h2 className="subtopic-pane-title">
              Memória RAM com Tecnologia ECC
            </h2>
            <p className="subtopic-pane-intro">
              <strong>ECC (Error-Correcting Code)</strong> é essencial em
              servidores para evitar corrupções invisíveis causadas por
              interferências elétricas ou radiação de fundo (
              <em>Single-Bit Flips</em>).
            </p>

            <div className="subtopic-alert-grid">
              <div className="subtopic-alert subtopic-alert-success">
                <h4>🟢 Single-Bit Error (Erro de 1 Bit)</h4>
                <p>
                  Detectado e <strong>corrigido automaticamente</strong> em
                  tempo de execução sem afetar o sistema operacional.
                </p>
              </div>

              <div className="subtopic-alert subtopic-alert-warning">
                <h4>🔴 Multi-Bit Error (Erro de Múltiplos Bits)</h4>
                <p>
                  Detectado imediatamente. O servidor força uma{" "}
                  <strong>parada segura</strong> (Kernel Panic / Reboot) para
                  não corromper arquivos em disco.
                </p>
              </div>
            </div>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>RDIMM (Registered)</h3>
                  <p>
                    Possui registrador de controle para aliviar a carga
                    elétrica. É o padrão de mercado.
                  </p>
                </div>
              </div>
              <div className="subtopic-card">
                <div>
                  <h3>LRDIMM (Load-Reduced)</h3>
                  <p>
                    Bufferiza controle e dados, permitindo atingir as
                    capacidades máximas de RAM por slot.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. GERENCIAMENTO HPE iLO */}
        {activeTab === "ilo" && (
          <section>
            <h2 className="subtopic-pane-title">
              Gerenciamento Remoto Out-of-Band via HPE iLO
            </h2>
            <p className="subtopic-pane-intro">
              O <strong>HPE iLO (Integrated Lights-Out)</strong> é um chip
              dedicado (BMC) soldado na placa-mãe. Ele opera de forma
              independente do sistema operacional principal.
            </p>

            <div className="subtopic-cards-grid">
              <div className="subtopic-card">
                <div>
                  <h3>🖥️ KVM Remoto</h3>
                  <p>
                    Acesso ao teclado, monitor e mouse via navegador, permitindo
                    configurar BIOS ou ver telas de boot.
                  </p>
                </div>
              </div>
              <div className="subtopic-card">
                <div>
                  <h3>💿 Virtual Media</h3>
                  <p>
                    Montagem de arquivos ISO remotos para instalar sistemas
                    operacionais e hipervisores (como VMware ESXi).
                  </p>
                </div>
              </div>
              <div className="subtopic-card">
                <div>
                  <h3>🌡️ Monitoramento Térmico</h3>
                  <p>
                    Leitura de sensores de temperatura, rotação de coolers,
                    fontes de alimentação e consumo em Watts.
                  </p>
                </div>
              </div>
              <div className="subtopic-card">
                <div>
                  <h3>🔒 Silicon Root of Trust</h3>
                  <p>
                    Segurança via hardware: impede que o servidor inicialize com
                    firmware infectado ou não autorizado.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Seção Final de Chamada para Ação */}
      <footer className="subtopic-cta-footer">
        <div className="subtopic-cta-content">
          <h3>🧠 Pronto para fixar o conteúdo?</h3>
          <p>
            Teste seus conhecimentos sobre Hardware HPE no módulo de exercícios.
          </p>
        </div>
        <Link to="/quiz" className="subtopic-cta-btn">
          Ir para os Exercícios ➡️
        </Link>
      </footer>
    </article>
  );
}
