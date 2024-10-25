import { useContext } from "react";
import userContext from "../contexts/userContext";
import '../App.css'
import NavbarDash from "../components/NavbarDash";
import Logout from '../components/Logout.jsx'
import Button from '../components/Button.jsx';

function Dashboard() {

    const {user} = useContext(userContext)

    return(
        <main>
        <section>
                <div className="user">{user}</div>
                <div className="divCentro2"><NavbarDash/></div>
                <Logout/>
        </section>
        </main>
    )
}

export default Dashboard