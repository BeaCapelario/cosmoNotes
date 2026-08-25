# 🌌 CosmoNotes

🌐✨ Portal de estudos interativo sobre redes, servidores e Linux com quizzes e flashcards.

O CosmoNotes é uma plataforma web personalizada, desenvolvida para centralizar, organizar e fixar conteúdos de Tecnologia da Informação. Com um design responsivo, moderno e uma identidade visual inspirada em tons pastel e elementos brilhantes, o projeto transforma a rotina de estudos de infraestrutura em uma experiência interativa e envolvendo.

## 🎨 Identidade Visual & Design System

O projeto adota uma estética limpa, amigável e fofa, utilizando cantos bem arredondados, sombras marcantes e um esquema de cores inspirado no brilho estelar:

### Paleta de Cores (Cosmic Sparkle)
*   **Fundo Lavanda Suave** (`#F9F4FF`) para uma leitura confortável.
*   **Destaques em Rosa Vibrante** (`#FF79C6`) e **Ciano Neon** (`#00F5D4`).
*   **Elementos de suporte** em Lavanda Médio e **Amarelo Brilhante** (`#FFEE58`).

### Tipografia
*   Títulos amigáveis com a fonte **Fredoka One**.
*   Textos de leitura leve e legível com a fonte **Quicksand**.

## 🔮 Funcionalidades

O portal foi estruturado para guiar o aprendizado de forma lógica e dinâmica:

*   **Tela Home Principal:** Cards clicáveis divididos por grandes áreas tecnológicas (ex: Redes, Linux, Virtualização).
*   **Home Secundária (Páginas de Tópicos):** Um banner personalizado que lista os subtópicos específicos de cada área.
*   **Página de Conteúdo:** Onde os resumos e anotações teóricas são exibidos de forma limpa e estruturada.
*   **Dicionário de Termos (Flashcards):** Um glossário interativo com efeito visual de "revelação" (flip) ao clicar nos cards para consultar os significados.
*   **Quiz Interativo:** Uma área de exercícios com perguntas de múltipla escolha, feedback visual instantâneo para acertos/erros e explicação didática das respostas.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando práticas modernas de desenvolvimento frontend:

*   **React** (com Vite para um ambiente de desenvolvimento ultra-rápido)
*   **CSS3** (com uso intensivo de CSS Variables para controle de temas e facilidade de manutenção)
*   **JSON** (dados estruturados e separados da lógica de visualização)
*   **React Router** (para navegação fluida entre as páginas)

## 📂 Estrutura do Projeto

A arquitetura do projeto segue o padrão de componentes modulares e a prática de co-location (agrupamento de arquivos relacionados):

```text
src/
├── assets/
│   ├── Images/             # Ilustrações e imagens de fundo
│   └── data/               # Arquivos JSON de dados estruturados
│       ├── topicos.json    # Dados de navegação e tópicos
│       ├── dicionario.json # Termos e significados dos flashcards
│       └── quiz.json       # Perguntas, alternativas e respostas
├── Components/             # Componentes reutilizáveis globais (Header, Footer, Card)
├── Pages/                  # Páginas principais da aplicação
│   ├── Dicionario/         # Página de Flashcards (Dicionario.jsx e dicionario.css)
│   ├── Exercicios/         # Página do Quiz (Exercicios.jsx e exercicios.css)
│   ├── HomeTopico/         # Sub-home de tópicos (HomeTopico.jsx e hometopico.css)
│   └── TopicoIndividual/   # Conteúdo das aulas (TopicoIndividual.jsx e topicoindividual.css)
├── App.jsx                 # Componente raiz e configuração de rotas
├── index.css               # Definição do Design System (:root) e estilos globais
└── main.jsx                # Ponto de entrada do React
```

## 🛠️ Como Executar o Projeto Localmente
Siga os passos abaixo para rodar a aplicação em sua máquina:

1. Clone o repositório:
```text
git clone https://github.com/seu-usuario/cosmonotes.git
```
2. Acesse a pasta do projeto:
```text
cd cosmonotes
```
3. Instale as dependências:
```text
npm install
```
4. Inicie o servidor de desenvolvimento:
```text
npm install
```
Abra o navegador no endereço indicado no terminal (geralmente http://localhost:5173) para ver o portal brilhando!✨

## Licença & Autoria
Desenvolvido com 💖 por Bea (Meio-Oficial de Tecnologia). Sinta-se livre para dar um fork, sugerir melhorias ou usar este espaço para se inspirar! 🌟



"""


