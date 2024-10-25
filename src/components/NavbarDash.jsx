import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faList } from '@fortawesome/free-solid-svg-icons'; 

function NavbarDash() {
    return(
        <>
            <div className='divnavdashboard'>
            <Link to="/projetoIfsulTemperatura/criarUsers" className='nav2'>
                <FontAwesomeIcon icon={faUser} /> Criar Leitos
            </Link>
            <Link to="/projetoIfsulTemperatura/listarUsers" className='nav2'><FontAwesomeIcon icon= {faList}/> Listar Leitos</Link>
            </div>

        </>
    )
}

export default NavbarDash;
