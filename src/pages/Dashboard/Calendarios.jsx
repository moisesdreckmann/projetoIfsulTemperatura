import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NavbarDash from "../../components/NavbarDash";
import usuario from '../../assets/usuario.webp';
import Logout from "../../components/Logout";
import userContext from '../../contexts/userContext';
import { useContext } from 'react';

function Calendario() {
  const [date, setDate] = useState(new Date());
  const [userNames, setUserNames] = useState({});
  const { user } = useContext(userContext);

  const onChange = (date) => {
    setDate(date);
  };

  const handleAddUser = (event) => {
    const day = date.getDate();
    setUserNames({ ...userNames, [day]: event.target.value });
  };

  const handleDateClick = () => {
    const day = date.getDate();
    const userName = userNames[day];
    if (userName) {
      alert(`Usuário(a) ${userName} registrado nesta data`);
    } else {
      alert(`Nenhum usuário registrado!`);
    }
  };

  return (
    <>
      <section className="sectionContainer">
        <div className="section1Dash">
          <img src={usuario} alt="" width={100} height={100} className="imgDash" />
          <div className="user">{user}</div>
          <div className="divCentro"><NavbarDash/></div>
          <Logout/>
        </div>
        <div className="section2Dash">
        <input type="text" placeholder="Digite o nome do usuário" onChange={handleAddUser} className='inputsCriar'/>
          <Calendar className="custom-calendar" onChange={onChange} value={date} onClickDay={handleDateClick} />
        </div>
      </section>
    </>
  );
}

export default Calendario;
