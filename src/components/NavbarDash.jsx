import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-solid-svg-icons';

function NavbarDash() {
    return(
        <>
            <div className='divnavdashboard'>
            <Link to="/projetoIfsulTemperatura/criarUsers" className='nav2'>
                <FontAwesomeIcon icon={faBed} /> Criar Leitos
            </Link>
            <Link to="/projetoIfsulTemperatura/listarUsers" className='nav2'><FontAwesomeIcon icon={faHospital} /> Listar Leitos</Link>
            </div>

        </>
    )
}

export default NavbarDash;
