import { useContext } from "react";
import userContext from "../contexts/userContext";
import '../App.css'
import usuario from '../assets/usuario.webp'
import NavbarDash from "../components/NavbarDash";
import Logout from '../components/Logout.jsx'
import Button from '../components/Button.jsx';
import { useState } from "react";

function Dashboard() {

    const {user} = useContext(userContext)

    const usersData = [
        { id: 1, name: "João", email: "joao@example.com" },
        { id: 2, name: "Roberto", email: "roberto@example.com" },
        { id: 3, name: "Maria", email: "maria@example.com" }
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(usersData);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = usersData.filter((user) =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredUsers(filtered);
    };
    

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
                    <input
                        type="text"
                        placeholder="Pesquisar usuários..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="inputsCriar"
                    />
                    <ul>
                        {filteredUsers.map((user) => (
                            <div key={user.id} className="divUsuarios">
                                    {user.email} 
                                    <Button type='submit' className="btn btnAjustes" nome="VER SENSOR"/>
                            </div>
                        ))}
                    </ul>
                </div>
        </section>
        </main>
    )
}

export default Dashboard