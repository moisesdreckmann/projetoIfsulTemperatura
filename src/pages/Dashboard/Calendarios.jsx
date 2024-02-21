import NavbarDash from "../../components/NavbarDash";
import usuario from '../../assets/usuario.webp'
import { useContext } from "react";
import userContext from "../../contexts/userContext";
import '../../App.css'
import Logout from "../../components/Logout";

function Calendario() {

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
                <p>oi</p>
            </div>
        </section>
        </main>
    )
}

export default Calendario