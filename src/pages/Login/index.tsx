import React, { useContext, useState } from "react";

import Header from "../../components/Header";
import {
  Wrapper,
  ContainerForm,
  Input,
  Subtitles,
  Title,
  InputBox,
  Button,
} from "../../styles/Login";
import { AuthContext, AuthProps } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmitClick = async () => {
    if (userName && password) {
      const authData: AuthProps = {
        username: userName,
        password: password,
      };

      const isLogged = await handleLogin(authData);
      if (isLogged) {
        navigate("/");
      } else {
        console.log("Error when signing in...");
      }
    }
  };

  return (
    <Wrapper>
      <Header hasButton={false} />
      <ContainerForm>
        <Title>Login</Title>
        <InputBox>
          <Subtitles>Email</Subtitles>
          <Input
            type="text"
            placeholder="Digite seu e-mail"
            required
            onChange={(res: React.FormEvent<HTMLInputElement>) =>
              setUserName(res.currentTarget.value)
            }
          />
        </InputBox>
        <InputBox>
          <Subtitles>Senha</Subtitles>
          <Input
            type="password"
            placeholder="Digite sua senha"
            required
            onChange={(res: React.FormEvent<HTMLInputElement>) =>
              setPassword(res.currentTarget.value)
            }
          />
        </InputBox>
        <Subtitles>
          <a href="https://brick-by-brick.notion.site/PS-NEU-Case-48fe48a964f3483c8c568ffb0a7f6932">
            Esqueci minha senha
          </a>
        </Subtitles>
        <Button type="button" onClick={handleSubmitClick}>
          Login
        </Button>
        <Subtitles>
          Ainda não tem conta?
          <a href="https://brick-by-brick.notion.site/PS-NEU-Case-48fe48a964f3483c8c568ffb0a7f6932">
            {" "}
            Cria minha conta
          </a>
        </Subtitles>
      </ContainerForm>
    </Wrapper>
  );
}

export default Login;
