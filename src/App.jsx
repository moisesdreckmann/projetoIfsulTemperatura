import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Logar from './pages/Logar.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CriarUsers from './pages/Dashboard/CriarUsers.jsx';
import ListarUsers from './pages/Dashboard/ListarUsers.jsx';
import Esqueceu from './pages/esqueceu-senha.jsx'; 
import userContext from './contexts/userContext.js';

function App() {
  const [user, setUser] = useState('');

  const updateUser = (userName) => {
    setUser(userName);
  };

  return (
    <userContext.Provider value={{ user }}>
      <Router>
        <main>
          <Routes>
            <Route path="/projetoIfsulTemperatura/" element={<Logar updateUser={updateUser} />} />
            <Route path="/projetoIfsulTemperatura/cadastrar" element={<Cadastro />} />
            <Route path="/projetoIfsulTemperatura/esqueceu-senha" element={<Esqueceu />} />
            <Route path="/projetoIfsulTemperatura/dashboard" element={<Dashboard />} />
            <Route path="/projetoIfsulTemperatura/criarUsers" element={<CriarUsers />} />
            <Route path="/projetoIfsulTemperatura/listarUsers" element={<ListarUsers />} />
          </Routes>
        </main>
      </Router>
    </userContext.Provider>
  );
}

export default App;
