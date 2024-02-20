import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../src/App.css';
import Logar from '../pages/Logar.jsx'
import Cadastro from '../pages/Cadastro.jsx';

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      {location.pathname === "/" ? (
        <div className='divLogin'>
            <Logar/>
            <span className="spanCadastro">
              NÃO POSSUI CONTA? 
              <Link to="/cadastro" className='navCadastro2'>REGISTRE-SE</Link>
            </span>
            
        </div>
      ) : (
        <div className="divLogin">
            <span><Link to="/"><FontAwesomeIcon icon={faArrowLeft} className='fontAwesome1Logar'/></Link></span>
            <Cadastro/>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
