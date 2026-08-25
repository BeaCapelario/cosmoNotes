import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import "./flashcard.css";

function FlashCard({ id, termo, significado, estrela }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isStarred, setIsStarred] = useState(estrela);

  // Manipulador de clique para girar o card
  const handleCardClick = (e) => {
    if (e.target.closest(".star-btn")) return;
    setIsFlipped(!isFlipped);
  };

  const handleStarClick = (e) => {
    e.stopPropagation(); 
    setIsStarred(!isStarred);
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
            <span className="card-badge">{termo}</span>
            <button
              className="star-btn"
              onClick={handleStarClick}
              aria-label="Favoritar termo"
            >
              {isStarred ? <FaStar className="star-active" /> : <FaRegStar />}
            </button>
          </div>
          <div className="card-center">
            <h2 className="card-term">{termo}</h2>
          </div>
          <div className="card-tip">Clique para ver o significado</div>
        </div>

        {/* ================= VERSO ================= */}
        <div className="flashcard-back">
          <div className="card-top">
            <span className="card-badge-back">{termo}</span>
          </div>
          <div className="card-center-back">
            <p className="card-meaning">{significado}</p>
          </div>
          <div className="card-tip">Clique para voltar</div>
        </div>
      </section>
    </div>
  );
}

export default FlashCard;
