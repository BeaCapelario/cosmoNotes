import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dicionario from "./Pages/Dicionario/Dicionario";
import Exercicios from "./Pages/Exercicios/Exercicios";

import TopicHardware from "./Pages/Topicos-Estudo/Topic-Hardware/Hardware";
import TopicSistemasOperacionais from "./Pages/Topicos-Estudo/Topic-SO/SistemasOperacionais";
import TopicArmazenamento from "./Pages/Topicos-Estudo/Topic-NAS_SAN/Armazenamento";
import TopicBackup from "./Pages/Topicos-Estudo/Topic-Backup/Backup";
import TopicCloud from "./Pages/Topicos-Estudo/Topic-Cloud/Cloud";

import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

      {/* =========== Rotas dos links no header =========== */}
        <Route path="/dicionario" element={<Dicionario />} />
        <Route path="/quiz" element={<Exercicios />} />

      {/* =========== Rotas dos tópicos =========== */}
        <Route path="/hardware-virtualizacao" element={<TopicHardware />} />
        <Route path="/sistemas-operacionais" element={<TopicSistemasOperacionais />} />
        <Route path="/armazenamento" element={<TopicArmazenamento />} />
        <Route path="/backup" element={<TopicBackup />} />
        <Route path="/nuvem" element={<TopicCloud />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
