import React, { useEffect } from 'react';
import Button from '../components/Button.jsx';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const expireCookies = () => {
        document.cookie.split(";").forEach((cookie) => {
            const [name] = cookie.split("=");
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
    };

    useEffect(() => {
        const interval = setInterval(expireCookies, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        expireCookies();
        navigate("/projetoIfsulTemperatura/");
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleLogout(); }} className='btnLogout'>
            <Button type='submit' className="btn2" nome="LOGOUT" />
        </form>
    );
}

export default Logout;
