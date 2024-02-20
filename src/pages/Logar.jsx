import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

function Login() {

    const schema = Yup.object().shape({
      email: Yup.string().required('O campo email é obrigatório'),
      pass: Yup.string().min(8,'A senha precisa ter pelo menos 8 caracteres').required('O campo senha é obrigatório'),
    });
  

    const { register, handleSubmit, formState, reset } = useForm({
      mode: 'onSubmit', 
      resolver: yupResolver(schema)})

    const {errors} = formState

    const handleSubmitData = (data) => {
      //console.log(data)
      //dados para serem consumidos por api
      reset()
      alert('formulário enviado com sucesso!')
      return data
    }

    return(
        <form className='divLogar' onSubmit={handleSubmit(handleSubmitData)}>
          <Input 
            {...register('email', { pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ })} 
            type="email" 
            placeholder='E-mail' 
            maxLength={27}
            name="email"
            className={errors.email ? 'campos error' : 'campos'}
          />
          {errors.email && <span className='span'>{errors.email.message}</span>}

          <Input 
            {...register('pass', { pattern: /^.{8,}$/ })}
            type="password" 
            placeholder='Password' 
            maxLength={10}
            name="pass"
            className={errors.pass ? 'campos error' : 'campos'}
          />
            {errors.pass && <span className='span'>{errors.pass.message}</span>}
            
          <Button className="btn" nome="LOGAR"/>
      </form>
    )
}

export default Login