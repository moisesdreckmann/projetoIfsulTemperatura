import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';

function App() {

  return (
    <Router>
      <main>
          <Navbar />
          <Routes>
            <Route path="/"/>
            <Route path="/cadastro"/>
          </Routes>
      </main>
    </Router>
  );
}

export default App;
