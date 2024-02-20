import Input from "../components/Input"
import Button from '../components/Button.jsx';

function Cadastro() {
    return(
        <>
            <div className='divLogin'>
                <Input type="text" placeholder="Name" maxLength={30}/>
                <Input type="email" placeholder='E-mail' maxLength={27}/>
                <Input type="password" placeholder='Password' maxLength={10}/>
                <Input type="password" placeholder='Password Confirm' maxLength={10}/>
                <Button className="btn" nome="CADASTRAR"/>
            </div>
        </>
    )
}

export default Cadastro