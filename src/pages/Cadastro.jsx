import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../components/Input";
import Button from '../components/Button.jsx';
import Navbar from '../components/NavBar.jsx';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '../firebase';  
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Cadastro() {
    const navigate = useNavigate(); 

    const validationSchema = yup.object().shape({
        nome: yup.string().required('O campo nome é obrigatório.'),
        email: yup.string().email('Email inválido.').required('O campo email é obrigatório.'),
        pass: yup.string().min(8, 'A senha precisa ter pelo menos 8 caracteres.').required('O campo senha é obrigatório.'),
        ConfirmaSenha: yup.string()
            .oneOf([yup.ref('pass'), null], 'As senhas precisam ser iguais.')
            .required('Confirme sua senha.'),
        Conselho: yup.string().required('O campo Conselho é obrigatório.'),
        Especialidade: yup.string().required('O campo Especialidade é obrigatório.'),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onSubmit',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmitData = async (data) => {
        const { nome, email, pass, Conselho, Especialidade, Contato } = data;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
            await sendEmailVerification(userCredential.user);


            await addDoc(collection(db, 'funcionarios'), {
                nome: nome.toLowerCase(),
                email: email.toLowerCase(),
                conselho: Conselho.toLowerCase(),
                contato: Contato, 
                especialidade: Especialidade.toLowerCase(),
            });

            reset();
            navigate('/projetoIfsulTemperatura/');
            alert("Usuário cadastrado com sucesso! Verifique seu email.");
        } catch (error) {
            alert("O email já está em uso ou houve um erro.");
            console.error(error); 
        }
    };

    const validarNumeros = (event) => {
        if (event.keyCode < 48 || event.keyCode > 57) {
            if (event.key !== 'Backspace') {
                event.preventDefault();
            }
        }
    };

    return (
        <>
            <form className='divLogin2' onSubmit={handleSubmit(handleSubmitData)}>
                <Input
                    name="nome"
                    type="text"
                    placeholder="Nome"
                    maxLength={30}
                    {...register("nome")}
                />
                {errors.nome && <p className="errorMessage">{errors.nome.message}</p>}
                <Input
                    type="email"
                    placeholder='E-mail'
                    maxLength={27}
                    name="email"
                    {...register("email")}
                />
                {errors.email && <p className="errorMessage">{errors.email.message}</p>}
                <Input
                    type="text"
                    placeholder='Conselho'
                    maxLength={10}
                    name="Conselho"
                    {...register("Conselho")}
                />
                {errors.Conselho && <p className="errorMessage">{errors.Conselho.message}</p>}
                <Input
                    type="text"
                    placeholder='Contato'
                    maxLength={10}
                    name="Contato"
                    onKeyDown={validarNumeros}
                    {...register("Contato")}
                />
                {errors.Contato && <p className="errorMessage">{errors.Contato.message}</p>}
                <Input
                    type="text"
                    placeholder='Especialidade'
                    maxLength={15}
                    name="Especialidade"
                    {...register("Especialidade")}
                />
                {errors.Especialidade && <p className="errorMessage">{errors.Especialidade.message}</p>}
                
                <div className='password-input'>
                    <Input
                        type={showPassword ? 'text' : 'password'} 
                        placeholder='Senha'
                        maxLength={10}
                        name="pass"
                        {...register("pass")}
                    />
                    <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)} 
                        className='show-password-button'
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>
                {errors.pass && <p className="errorMessage">{errors.pass.message}</p>}

                <div className='password-input'>
                    <Input
                        name="ConfirmaSenha"
                        type={showConfirmPassword ? 'text' : 'password'} 
                        placeholder='Confirmação de Senha'
                        maxLength={10}
                        {...register("ConfirmaSenha")}
                    />
                    <button 
                        type="button" 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                        className='show-password-button'
                    >
                        <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                    </button>
                </div>
                {errors.ConfirmaSenha && <p className="errorMessage2">{errors.ConfirmaSenha.message}</p>}
                
                <Button type="submit" className="btn" nome="CADASTRAR" />
                <Navbar />
            </form>
        </>
    );
}

export default Cadastro;
