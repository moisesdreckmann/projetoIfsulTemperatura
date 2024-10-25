import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import Navbar from '../components/NavBar.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login({ updateUser }) {
  const schema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('O campo email é obrigatório'),
    pass: Yup.string().required('O campo senha é obrigatório').min(8, 'A senha precisa ter pelo menos 8 caracteres'),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'onSubmit', 
    resolver: yupResolver(schema)
  });

  const { errors } = formState;
  const navigate = useNavigate();

  // Estado para controlar a visibilidade da senha
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitData = async (data) => {
    const { email, pass } = data;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass); 
      const { uid, emailVerified } = userCredential.user;

      if (emailVerified) {
        updateUser(email.split('@')[0]); 
        reset();
        navigate("/projetoIfsulTemperatura/dashboard"); 
      } else {
        alert("Email não verificado. Por favor, verifique seu email.");
      }
    } catch (error) {
      alert("Usuário não encontrado. Email ou senha inválidos.");
    }
  };

  const validarNumeros = (event) => {
    if(event.keyCode < 48 || event.keyCode > 57) {
      if(event.key !== 'Backspace') {
        event.preventDefault();
      }
    }
  };

  return (
    <form className='divLogin' onSubmit={handleSubmit(handleSubmitData)}>
      <Input 
        {...register('email')} 
        type="email" 
        placeholder='E-mail' 
        maxLength={27}
        name="email"
      />
      {errors.email && <span className='span1'>{errors.email.message}</span>}

      <div className='password-input'>
        <Input 
          {...register('pass')}
          type={showPassword ? 'text' : 'password'} // Muda o tipo com base no estado
          placeholder='Senha' 
          maxLength={10}
          name="pass"
          onKeyDown={validarNumeros}
        />
        <button 
          type="button" 
          onClick={() => setShowPassword(!showPassword)} // Alterna a visibilidade
          className='show-password-button'
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </div>
      {errors.pass && <span className='span1'>{errors.pass.message}</span>}

      <Button type='submit' className="btn" nome="LOGAR"/>
      <div className='divEspaco'></div>
      <Navbar />
    </form>
  );
}

export default Login;
