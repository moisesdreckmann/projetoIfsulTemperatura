import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';

function Login() {
    return(
        <div className='divLogar'>
        <Input type="email" placeholder='E-mail' maxLength={27}/>
        <Input type="password" placeholder='Password' maxLength={10}/>
        <Button className="btn" nome="LOGAR"/>
      </div>
    )
}

export default Login