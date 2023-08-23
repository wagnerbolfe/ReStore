import { Content, Background, RegisterContainer } from "./styles";
import logoImg from '../../../assets/logo.png';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from "react-hook-form";
import { Hypnosis } from "react-cssfx-loading";
import { TextField } from "@mui/material";
import agent from "../../../api/agent";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { isSubmitting, errors, isValid } } = useForm({
    mode: 'onTouched'
  });

  function handleApiErrors(errors: any) {
    console.log(errors);
    if (errors) {
      errors.forEach((error: string, index: number) => {
        if (error.includes('Password')) {
          setError('password', { message: error })
        } else if (error.includes('Email')) {
          setError('email', { message: 'O e-mail já existente' })
        } else if (error.includes('Username')) {
          setError('username', { message: 'O usuário já existente' })
        }
      });
    }
  }

  return (
    <RegisterContainer>
      <Content>
        <img src={logoImg} alt="logo" />

        <form onSubmit={handleSubmit(data => agent.Account.register(data)
          .then(() => {
            toast.success('Cadastro realizado! - Agora pode fazer o login');
            navigate('/login');
          })
          .catch(error => handleApiErrors(error)))}>
          <h1>Registre-se</h1>

          <TextField
            margin="normal"
            required
            fullWidth
            label="E-mail"
            autoFocus
            {...register('email', {
              required: 'E-mail obrigatório',
              pattern: {
                value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                message: 'Não é um endereço de e-mail válido'
              }
            })}
            error={!!errors.email}
            helperText={errors?.email?.message as string}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            autoFocus
            {...register('username', { required: 'O usuário é obrigatório' })}
            error={!!errors.username}
            helperText={errors?.username?.message as string}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Senha"
            type="password"
            autoFocus
            {...register('password', {
              required: 'Senha é obrigatória',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                message: 'A senha não atende aos requisitos de complexidade'
              }
            })}
            error={!!errors.password}
            helperText={errors?.password?.message as string}
          />

          <button disabled={!isValid} type="submit">{isSubmitting ? <Hypnosis color="#312e38" /> : 'Cadastrar'}</button>
        </form>
        <a href="/">
          <FiArrowLeft />
          Voltar
        </a>
      </Content>
      <Background />
    </RegisterContainer>
  )
}