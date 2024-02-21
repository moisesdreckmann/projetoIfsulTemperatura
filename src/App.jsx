import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Logar from './pages/Logar.jsx';
import Cadastro from './pages/Cadastro.jsx';

function App() {
  return (
    <Router>
      <main>
        <Routes>
            <Route path="/projetoIfsulTemperatura/" index element={<Logar />} />
            <Route path="/projetoIfsulTemperatura/cadastrar" element={<Cadastro />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
