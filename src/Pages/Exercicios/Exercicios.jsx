import React, { useState, useMemo } from "react";
import {
  FaCircleCheck,
  FaCircleXmark,
  FaArrowRight,
  FaRotateRight,
  FaLightbulb,
  FaAward,
} from "react-icons/fa6";
import questionsData from "../../assets/Data/quiz.json";
import "./exercicios.css";

const CATEGORIAS = [
  "Todas",
  "Hardware X86 e Virtualização",
  "Sistemas Operacionais e Gerenciamento",
  "Armazenamento e Conectividade (NAS e SAN)",
  "Backup e Proteção de Dados",
  "Computação em Nuvem",
];

function QuizPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // Filtra perguntas conforme a categoria selecionada
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === "Todas") return questionsData;
    return questionsData.filter((q) => q.categoria === selectedCategory);
  }, [selectedCategory]);

  const currentQuestion = filteredQuestions[currentIndex];
  const totalQuestions = filteredQuestions.length;
  const progressPercent = Math.round(
    ((currentIndex + 1) / totalQuestions) * 100,
  );

  // Selecionar uma opção de resposta
  const handleSelectOption = (option) => {
    if (isAnswered) return; // Trava se já respondeu
    setSelectedOption(option);
  };

  // Confirmar resposta e calcular placar
  const handleConfirmAnswer = () => {
    if (!selectedOption || isAnswered) return;

    setIsAnswered(true);
    if (selectedOption === currentQuestion.respostaCorreta) {
      setScore((prev) => prev + 1);
    }
  };

  // Avançar para a próxima pergunta ou finalizar
  const handleNextQuestion = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  // Reiniciar o Quiz
  const handleRestartQuiz = (categoria = selectedCategory) => {
    setSelectedCategory(categoria);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="quiz-page-container">
      {/* 1. SELEÇÃO DE CATEGORIAS */}
      <header className="quiz-header">
        <h1 className="quiz-title">Quiz de Fixação Técnica</h1>
        <p className="quiz-subtitle">
          Teste seus conhecimentos em Infraestrutura de TI
        </p>

        <div className="category-filters">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              className={`category-chip ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => handleRestartQuiz(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* 2. CONTEÚDO PRINCIPAL (CARD OU RESULTADO) */}
      {!isQuizFinished ? (
        <main className="quiz-main">
          {/* Barra de Progresso */}
          <div className="progress-section">
            <div className="progress-info">
              <span>
                Questão {currentIndex + 1} de {totalQuestions}
              </span>
              <span>{progressPercent}%</span>
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Card da Pergunta */}
          <section className="question-card">
            <div className="card-meta">
              <span className="question-badge">
                {currentQuestion?.categoria}
              </span>
              <span className="score-badge">Acertos: {score}</span>
            </div>

            <h2 className="question-text">{currentQuestion?.pergunta}</h2>

            {/* Lista de Opções */}
            <div className="options-grid">
              {currentQuestion?.opcoes.map((opcao, idx) => {
                const isSelected = selectedOption === opcao;
                const isCorrect = opcao === currentQuestion.respostaCorreta;

                let optionClass = "option-btn";
                if (isSelected) optionClass += " selected";
                if (isAnswered) {
                  if (isCorrect) optionClass += " correct";
                  else if (isSelected && !isCorrect) optionClass += " wrong";
                  else optionClass += " disabled";
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    className={optionClass}
                    onClick={() => handleSelectOption(opcao)}
                    disabled={isAnswered}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="option-label">{opcao}</span>
                    {isAnswered && isCorrect && (
                      <FaCircleCheck className="status-icon icon-correct" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <FaCircleXmark className="status-icon icon-wrong" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bloco de Explicação e Feedback */}
            {isAnswered && (
              <div
                className={`explanation-box ${selectedOption === currentQuestion.respostaCorreta ? "exp-correct" : "exp-wrong"}`}
              >
                <div className="explanation-header">
                  <FaLightbulb />
                  <strong>Explicação Técnica:</strong>
                </div>
                <p className="explanation-text">{currentQuestion.explicacao}</p>
              </div>
            )}

            {/* Ações / Botões */}
            <div className="card-actions">
              {!isAnswered ? (
                <button
                  type="button"
                  className="action-btn confirm-btn"
                  onClick={handleConfirmAnswer}
                  disabled={!selectedOption}
                >
                  Confirmar Resposta
                </button>
              ) : (
                <button
                  type="button"
                  className="action-btn next-btn"
                  onClick={handleNextQuestion}
                >
                  {currentIndex + 1 < totalQuestions
                    ? "Próxima Questão"
                    : "Ver Resultado Final"}
                  <FaArrowRight />
                </button>
              )}
            </div>
          </section>
        </main>
      ) : (
        /* 3. TELA DE RESULTADOS FINAIS */
        <section className="results-card">
          <div className="results-icon-wrap">
            <FaAward className="results-award-icon" />
          </div>
          <h2>Quiz Concluído!</h2>
          <p className="results-category">
            Categoria: <strong>{selectedCategory}</strong>
          </p>

          <div className="score-circle">
            <span className="score-number">{score}</span>
            <span className="score-total">/ {totalQuestions}</span>
          </div>

          <p className="results-message">
            {score === totalQuestions
              ? "Excelente! Você domina todos os conceitos dessa categoria! 🎯"
              : score >= totalQuestions / 2
                ? "Bom trabalho! Continue revisando os flashcards para gabaritar. 📚"
                : "Vale a pena revisar os flashcards dessa categoria e tentar de novo! 💡"}
          </p>

          <button
            type="button"
            className="action-btn restart-btn"
            onClick={() => handleRestartQuiz(selectedCategory)}
          >
            <FaRotateRight /> Tentar Novamente
          </button>
        </section>
      )}
    </div>
  );
}

export default QuizPage;
