import React, { useState, useMemo } from "react";
import FlashCard from "../../Components/FlashCard";
import termosData from "../../assets/Data/dicionario.json";
import "./dicionario.css";

const ITEMS_PER_PAGE = 9; // Quantidade de cards por página (3x3)

function Dicionario() {
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Ordenação alfabética (A-Z) sem alterar o JSON
  const termosOrdenados = useMemo(() => {
    return [...termosData].sort((a, b) => 
      a.termo.localeCompare(b.termo, "pt-BR", { sensitivity: "base" })
    );
  }, []);

  // 2. Cálculo de páginas
  const totalPages = Math.ceil(termosOrdenados.length / ITEMS_PER_PAGE);

  // 3. Fatiamento dos itens da página atual
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return termosOrdenados.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [termosOrdenados, currentPage]);

  // Função para trocar de página com rolagem suave para o topo
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="dicionario-main">
      <header className="dicionario-header">
        <h1 className="dicionario-title">Dicionário de TI</h1>
        <p className="dicionario-subtitle">
          Clique nos cards para revelar o significado e revisar seus conceitos de infraestrutura.
        </p>
      </header>

      {/* Grid com apenas os cards da página ativa */}
      <section className="flashcards-grid">
        {currentItems.map((item) => (
          <FlashCard
            key={item.id} 
            id={item.id}
            termo={item.termo}
            categoria={item.categoria}
            significado={item.significado}
            exemplo={item.exemplo}
            analogia={item.analogia}
            estrela={item.estrela}
          />
        ))}
      </section>

      {/* Controles de Paginação */}
      {totalPages > 1 && (
        <nav className="pagination-container" aria-label="Navegação de páginas">
          <button
            type="button"
            className="pagination-btn pagination-arrow"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ⬅️ Anterior
          </button>

          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  type="button"
                  className={`pagination-number ${currentPage === pageNumber ? "active" : ""}`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="pagination-btn pagination-arrow"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próximo ➡️
          </button>
        </nav>
      )}
    </main>
  );
}

export default Dicionario;
