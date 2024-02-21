import { useContext } from "react";
import userContext from "../contexts/userContext";
import '../App.css'
import usuario from '../assets/usuario.webp'
import NavbarDash from "../components/NavbarDash";
import Logout from '../components/Logout.jsx'

function Dashboard() {

    const {user} = useContext(userContext)

    return(
        <main>
        <section className="sectionContainer">
            <div className="section1Dash">
                <img src={usuario} alt="" width={100} height={100} className="imgDash" />
                <div className="user">{user}</div>
                <div className="divCentro"><NavbarDash/></div>
                <Logout/>
            </div>
            <div className="section2Dash">
                
            </div>
        </section>
        </main>
    )
}

export default Dashboard