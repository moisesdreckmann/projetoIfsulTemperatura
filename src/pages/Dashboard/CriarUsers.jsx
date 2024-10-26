import { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Importando a seta de voltar
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import userContext from "../../contexts/userContext.js";
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import Logout from "../../components/Logout.jsx";
import '../../App.css';
import { db } from '../../firebase.js';

function CriarUsers() {
    const { user } = useContext(userContext);
    const [nome, setNome] = useState('');
    const [dispositivo, setDispositivo] = useState('');
    const navigate = useNavigate(); // Inicializando useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!dispositivo) {
            alert('Dispositivo é obrigatório!');
            return;
        }

        try {
            const q = query(collection(db, 'leitos'), where('dispositivo', '==', dispositivo.toLowerCase())); // Consulta para verificar duplicidade
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                alert('O dispositivo já está cadastrado!'); 
                return;
            }

            await addDoc(collection(db, 'leitos'), {
                nome: nome ? nome.toLowerCase() : null,
                dispositivo: dispositivo.toLowerCase(),
            });
            alert('Leito cadastrado com sucesso!');
            setNome('');
            setDispositivo('');
        } catch (error) {
            alert('Erro ao cadastrar leito: ' + error.message);
        }
    };

    return (
        <>
            <section className="sectionContainer">
                <div className="section1Dash">
                    <div className="user">{user}</div>
                    <span className="criarleitosimg"><FontAwesomeIcon icon={faBed} /> Criar Leitos</span>
                    <button className="btnVoltar" onClick={() => navigate('/projetoIfsulTemperatura/dashboard')}>
                        <FontAwesomeIcon icon={faArrowLeft} /> Voltar
                    </button>
                    <Logout />
                </div>
                <div className="section2Dash">
                    <h1 className="titulopaginas">CRIAR LEITOS</h1>
                    <form onSubmit={handleSubmit} className="formCriar">
                        <Input
                            type="text"
                            placeholder='Nome do Leito'
                            maxLength={27}
                            name="nome"
                            className="inputsCriar"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder='Dispositivo'
                            maxLength={27}
                            name="dispositivo"
                            className="inputsCriar"
                            value={dispositivo}
                            onChange={(e) => setDispositivo(e.target.value)}
                        />
                        <Button type="submit" className="btn" nome="CADASTRAR" />
                    </form>
                </div>
            </section>
        </>
    );
}

export default CriarUsers;
