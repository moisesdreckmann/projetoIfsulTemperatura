import NavbarDash from "../../components/NavbarDash.jsx";
import usuario from '../../assets/usuario.webp'
import { useContext } from "react";
import userContext from "../../contexts/userContext.js";
import '../../App.css'
import Logout from "../../components/Logout.jsx";
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

function CriarUsers() {

    const {user} = useContext(userContext)
    return(
        <>
            <section className="sectionContainer">
                <div className="section1Dash">
                    <img src={usuario} alt="" width={100} height={100} className="imgDash"  />
                    <div className="user">{user}</div>
                    <FontAwesomeIcon icon={faUser} /> Criar Leitos
                    <Logout/>
                </div>
                <div className="section2Dash">
                    <form action="" className="formCriar">
                        <Input 
                            type="email" 
                            placeholder='E-mail' 
                            maxLength={27}
                            name="email"
                            className="inputsCriar"
                        />
                        <Input 
                            type="text" 
                            placeholder='Nome' 
                            maxLength={27}
                            name="nome"
                            className="inputsCriar"
                        />
                        <Button type='submit' className="btn" nome="CADASTRAR"/>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CriarUsers