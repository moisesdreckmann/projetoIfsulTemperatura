import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faList } from '@fortawesome/free-solid-svg-icons'; 
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function NavbarDash() {
    return(
        <>
            <Link to="/projetoIfsulTemperatura/criarUsers" className='nav2'>
                <FontAwesomeIcon icon={faUser} /> Criar Usuários
            </Link>
            <Link to="/projetoIfsulTemperatura/listarUsers" className='nav2'><FontAwesomeIcon icon= {faList}/> Listar Usuários</Link>
            <Link to="/projetoIfsulTemperatura/calendario" className='nav2'><FontAwesomeIcon icon={faCalendar} /> Calendário</Link>
        </>
    )
}

export default NavbarDash;
