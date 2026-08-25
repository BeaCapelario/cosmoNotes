import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HomeTopico from "./Pages/HomeTopico/HomeTopico";
import TopicoIndividual from "./Pages/TopicoIndividual/TopicoIndividual";
import Dicionario from "./Pages/Dicionario/Dicionario";
import Exercicios from "./Pages/Exercicios/Exercicios";
import Header from "./Components/Header";

const repoName = "/cosmoNotes/"

function App() {
  return (
    <Router basename={repoName}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topicos/:topicoId" element={<HomeTopico />} />
        <Route
          path="/topicos/:topicoId/:subtopicoId"
          element={<TopicoIndividual />}
        />
        <Route path="/dicionario" element={<Dicionario />} />
        <Route path="/quiz" element={<Exercicios />} />
      </Routes>
    </Router>
  );
}

export default App;
