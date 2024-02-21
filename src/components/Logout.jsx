import Button from '../components/Button.jsx';
import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/projetoIfsulTemperatura/");
    }

    return(
        <>
        <form action="" onSubmit={handleSubmit} className='btnLogout'>
            <Button type='submit' className="btn" nome="LOGOUT"/>
        </form>
        </>
    )
}

export default Logout