import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../src/App.css';

function Navbar() {

  const location = useLocation()

  return (
    <nav>
      {location.pathname === '/projetoIfsulTemperatura/' ? (
        <div>
          <span className="spanCadastro">
            NÃO POSSUI CONTA? 
            <Link to="/projetoIfsulTemperatura/cadastrar" className='navCadastro2'>REGISTRE-SE</Link>
          </span>  
        </div>
      ) : (
        <div>
          <span><Link to="/projetoIfsulTemperatura/"><FontAwesomeIcon icon={faArrowLeft} className='fontAwesome1Logar'/></Link></span>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
