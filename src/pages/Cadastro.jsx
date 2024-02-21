import Input from "../components/Input"
import Button from '../components/Button.jsx';
import Navbar from '../components/NavBar.jsx';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

function Cadastro() {

    const schema = Yup.object().shape({
        nome: Yup.string().required('O campo nome é obrigatório.'),
        email: Yup.string().required('O campo email é obrigatório'),
        pass: Yup.string().required('O campo senha é obrigatório').min(8,'A senha precisa ter pelo menos 8 caracteres'),
        ConfirmaSenha: Yup.string().required('Confirme sua senha').oneOf([Yup.ref('pass'), null], 'As senhas precisam ser iguais')
    });
    
    
    const { register, handleSubmit, formState, reset } = useForm({
    mode: 'onSubmit', 
    resolver: yupResolver(schema)})

    const {errors} = formState

    const handleSubmitData = (data) => {
    //console.log(data)
    //dados para serem consumidos por api
    reset()
    return data
    }

    const validarNumeros = (event) => {
        if(event.keyCode  < 48 || event.keyCode  > 57){
          if(event.key != 'Backspace') {
            event.preventDefault() 
          }
        }
    }

    return(
        <>
            <form className='divLogin' onSubmit={handleSubmit(handleSubmitData)}>
                <Input 
                    {...register('nome')}
                    name="nome"
                    type="text" 
                    placeholder="Name" 
                    maxLength={30}
                />
                {errors.nome && <span className='span1'>{errors.nome.message}</span>}

                <Input 
                    {...register('email', { pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ })} 
                    type="email" 
                    placeholder='E-mail' 
                    maxLength={27}
                    name="email"
                />
                {errors.email && <span className='span1'>{errors.email.message}</span>}

                <Input 
                    {...register('pass', { pattern: /^.{8,}$/ })}
                    type="password" 
                    placeholder='Password' 
                    maxLength={10}
                    name="pass"
                />
                {errors.pass && <span className='span1'>{errors.pass.message}</span>}

                <Input 
                    {...register('ConfirmaSenha', { pattern: /^[0-9]{8}$/ })} 
                    name="ConfirmaSenha"
                    type="password" 
                    placeholder='Password Confirm' 
                    maxLength={10}
                    onKeyDown={validarNumeros}
                />
                {errors.ConfirmaSenha && <span className='span1'>{errors.ConfirmaSenha.message}</span>}

                <Button type="submit" className="btn" nome="CADASTRAR"/>
                <Navbar />
            </form>
        </>
    )
}

export default Cadastro