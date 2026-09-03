// Bibliotecas externas e Hooks (React, Router, etc.)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// Componentes Estruturais / Compartilhados (Layout)
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// Páginas Principais (Navegação Global)
import Home from "./Pages/Home/Home";
import Dicionario from "./Pages/Dicionario/Dicionario";
import Exercicios from "./Pages/Exercicios/Exercicios";
// Módulos e Tópicos de Estudo (Gerais)
import TopicHardware from "./Pages/Topicos-Estudo/Topic-Hardware/Hardware";
import TopicSistemasOperacionais from "./Pages/Topicos-Estudo/Topic-SO/SistemasOperacionais";
import TopicArmazenamento from "./Pages/Topicos-Estudo/Topic-NAS_SAN/Armazenamento";
import TopicBackup from "./Pages/Topicos-Estudo/Topic-Backup/Backup";
import TopicCloud from "./Pages/Topicos-Estudo/Topic-Cloud/Cloud";
// Subtópicos / Detalhamentos Específicos
import HardwareHPE from "./Pages/Topicos-Estudo/Topic-Hardware/HardwareHPE";
import VMware from "./Pages/Topicos-Estudo/Topic-Hardware/Vmware";
import Nutanix from "./Pages/Topicos-Estudo/Topic-Hardware/Nutanix";
import Linux from "./Pages/Topicos-Estudo/Topic-SO/Linux";
import WindowsServer from "./Pages/Topicos-Estudo/Topic-SO/WindowsServer";
import Altiris from "./Pages/Topicos-Estudo/Topic-SO/Altiris";
import NAS from "./Pages/Topicos-Estudo/Topic-NAS_SAN/Nas";
import SAN from "./Pages/Topicos-Estudo/Topic-NAS_SAN/San";
import RedeSan from "./Pages/Topicos-Estudo/Topic-NAS_SAN/RedeSan";
import BackupTSM from "./Pages/Topicos-Estudo/Topic-Backup/BackupTSM";
import BackupVeeam from "./Pages/Topicos-Estudo/Topic-Backup/BackupVeeam";
import IaaS from "./Pages/Topicos-Estudo/Topic-Cloud/FundamentosIaas";
import OpenStack from "./Pages/Topicos-Estudo/Topic-Cloud/OpenStack";
// Arquivos de Estilo Global e Ativos
import "./index.css";

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
        <Route path="/hardware-hpe" element={<HardwareHPE />} />
        <Route path="/vmware" element={<VMware />} />
        <Route path="/nutanix" element={<Nutanix />} />

        <Route path="/sistemas-operacionais" element={<TopicSistemasOperacionais />} />
        <Route path="/linux-server" element={<Linux />} />
        <Route path="/windows-server" element={<WindowsServer />} />
        <Route path="/altiris" element={<Altiris />} />

        <Route path="/armazenamento" element={<TopicArmazenamento />} />
        <Route path="/nas" element={<NAS />} />
        <Route path="/san" element={<SAN />} />
        <Route path="/rede-san" element={<RedeSan />} />

        <Route path="/backup" element={<TopicBackup />} />
        <Route path="backup-veeam" element={<BackupVeeam />} />
        <Route path="/backup-tsm" element={<BackupTSM />} />

        <Route path="/nuvem" element={<TopicCloud />} />
        <Route path="/fundamentos-iaas" element={<IaaS />} />
        <Route path="/openstack" element={<OpenStack />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
