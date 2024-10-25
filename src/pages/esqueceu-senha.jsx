import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import Navbar from '../components/NavBar.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 
import { sendPasswordResetEmail } from 'firebase/auth'; 

function Esqueceu({ updateUser }) {
  const schema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('O campo email é obrigatório'),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'onSubmit', 
    resolver: yupResolver(schema)
  });

  const { errors } = formState;
  const navigate = useNavigate();

  const handleSubmitData = async (data) => {
    const { email } = data;
    try {
      await sendPasswordResetEmail(auth, email); 
      alert("Email de redefinição de senha enviado para seu E-mail");
      reset();
      navigate("/projetoIfsulTemperatura/"); 
    } catch (error) {
      alert("Erro ao enviar email. Verifique se o email está cadastrado.");
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
        
      <Button type='submit' className="btn" nome="REDEFINIR"/>
      <div className='divEspaco'></div>
      <Navbar />
    </form>
  );
}

export default Esqueceu;
