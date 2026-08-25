import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HomeTopico from "./Pages/HomeTopico/HomeTopico";
import TopicoIndividual from "./Pages/TopicoIndividual/TopicoIndividual";
import Dicionario from "./Pages/Dicionario/Dicionario";
import Exercicios from "./Pages/Exercicios/Exercicios";
import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
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
      <Footer />
    </Router>
  );
}

export default App;
