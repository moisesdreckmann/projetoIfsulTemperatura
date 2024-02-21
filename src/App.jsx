import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Logar from './pages/Logar.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Dashboard from './pages/Dashboard.jsx';
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
            <Route path="/projetoIfsulTemperatura/cadastrar" element={<Cadastro updateUser={updateUser} />} />
            <Route path="/projetoIfsulTemperatura/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </userContext.Provider>
  );
}

export default App;
