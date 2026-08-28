import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import "./flashcard.css";

function FlashCard({
  id,
  termo,
  categoria,
  significado,
  exemplo,
  analogia,
  estrela = false,
  onToggleStar,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isStarred, setIsStarred] = useState(estrela);

  // Validação para garantir que não são apenas espaços vazios
  const temSignificado = significado && significado.trim().length > 0;
  const temAnalogia = analogia && analogia.trim().length > 0;
  const temExemplo = exemplo && exemplo.trim().length > 0;

  const handleCardClick = (e) => {
    // Não vira o card se o clique for na estrela ou em links/botões
    if (e.target.closest(".interactive-action")) return;
    setIsFlipped(!isFlipped);
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    const newStarred = !isStarred;
    setIsStarred(newStarred);
    if (onToggleStar) onToggleStar(id, newStarred);
  };

  return (
    <div
      className={`flashcard-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <section className="flashcard-inner">
        {/* ================= FRENTE ================= */}
        <div className="flashcard-front">
          <div className="card-top">
            <span className="card-badge">{categoria || "Geral"}</span>
            <button
              type="button"
              className="star-btn interactive-action"
              onClick={handleStarClick}
              aria-label="Favoritar termo"
              title="Favoritar termo"
            >
              {isStarred ? <FaStar className="star-active" /> : <FaRegStar />}
            </button>
          </div>

          <div className="card-center">
            <h2 className="card-term">{termo}</h2>
          </div>

          <div className="card-tip">Clique para ver detalhes ↺</div>
        </div>

        {/* ================= VERSO (TODAS AS INFORMAÇÕES VISÍVEIS) ================= */}
        <div className="flashcard-back">
          <div className="card-top">
            <span className="card-badge-back">{categoria || "Geral"}</span>
            <span className="back-term-title">{termo}</span>
          </div>

          <div className="card-content-scroll">
            {/* 1. Significado */}
            {temSignificado && (
              <div className="info-section">
                <span className="section-tag">Conceito</span>
                <p className="card-meaning">{significado}</p>
              </div>
            )}

            {/* 2. Analogia */}
            {temAnalogia && (
              <div className="info-section analogy-box">
                <span className="section-tag tag-analogy">💡 Analogia</span>
                <p className="card-analogy">"{analogia}"</p>
              </div>
            )}

            {/* 3. Exemplo */}
            {temExemplo && (
              <div className="info-section example-box">
                <span className="section-tag tag-example">💻 Exemplo Prático</span>
                <p className="card-example">{exemplo}</p>
              </div>
            )}
          </div>

          <div className="card-tip">Clique para voltar ↺</div>
        </div>
      </section>
    </div>
  );
}

export default FlashCard;
