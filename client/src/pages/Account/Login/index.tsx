import { LoginContainer, Content, Background } from "./styles";
import logoImg from '../../../assets/logo.png';
import { FiLogIn } from 'react-icons/fi';
import { FieldValues, useForm } from "react-hook-form";
import { Hypnosis } from "react-cssfx-loading";
import { TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/configureStore";
import { signInUser } from "../accountSlice";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { isSubmitting, errors, isValid } } = useForm({ mode: 'all' });

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(signInUser(data));
      navigate(location.state?.from || '/catalog');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LoginContainer>
      <Content>
        <img src={logoImg} alt="logo" />

        <form onSubmit={handleSubmit(submitForm)}>
          <h1>Faça seu logon</h1>

          <TextField
            margin="normal"
            required
            fullWidth
            label="Usuário"
            autoFocus
            {...register('username', { required: 'O e-mail é obrigatório' })}
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
            {...register('password', { required: 'A senha é obrigatória' })}
            error={!!errors.password}
            helperText={errors?.password?.message as string}
          />

          <button disabled={!isValid} type="submit">{isSubmitting ? <Hypnosis color="#312e38" /> : 'Entrar'}</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="/register">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </LoginContainer>
  )
}