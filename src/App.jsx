import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Logar from './pages/Logar.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Dashboard from './pages/Dashboard.jsx';
import userContext from './contexts/userContext.js';

function App() {
  return (
    <userContext.Provider value={{user: '123'}}>
      <Router>
        <main>
          <Routes>
              <Route path="/projetoIfsulTemperatura/" index element={<Logar />} />
              <Route path="/projetoIfsulTemperatura/cadastrar" element={<Cadastro />} />
              <Route path="/projetoIfsulTemperatura/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </userContext.Provider>
  );
}

export default App;
