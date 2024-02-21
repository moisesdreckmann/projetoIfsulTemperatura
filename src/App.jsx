import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Logar from './pages/Logar.jsx'
import Cadastro from './pages/Cadastro.jsx';

function App() {

  return (
    <Router>
      <main>
          <Navbar />
          <Routes>
            <Route path="/" index={true} component={Logar}/>
            <Route path="/cadastro" component={Cadastro}/>
          </Routes>
      </main>
    </Router>
  );
}

export default App;
