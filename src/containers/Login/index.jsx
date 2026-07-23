import Logo from '../../assets/logo.svg';
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Link,
  Button,
} from './styles';

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input type="email" />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" />
          </InputContainer>
          <Link>Esqueci minha senha</Link>
          <Button>Entrar</Button>
        </Form>
        <Link>Nâo possui conta? Clique aqui</Link>
      </RightContainer>
    </Container>
  );
}
