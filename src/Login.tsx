import React, { useState } from "react";
import { handleLogin } from "./services/vehiclesService";

import Header from "./components/Header";
import {
  Wrapper,
  ContainerForm,
  Input,
  Subtitles,
  Title,
} from "./styles/Login";
import { AuthProps } from "./utils/constants";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitClick = () => {
    const authData: AuthProps = {
      auth: {
        username: userName,
        password: password,
      },
    };

    handleLogin(authData);
  };

  return (
    <Wrapper>
      <Header />
      <ContainerForm onSubmit={handleSubmitClick}>
        <Title>Login</Title>
        <Input
          type="text"
          onChange={(res: React.FormEvent<HTMLInputElement>) =>
            setUserName(res.currentTarget.value)
          }
        />
        <Input
          type="password"
          onChange={(res: React.FormEvent<HTMLInputElement>) =>
            setPassword(res.currentTarget.value)
          }
        />
        <Subtitles>
          <a href="https://brick-by-brick.notion.site/PS-NEU-Case-48fe48a964f3483c8c568ffb0a7f6932">
            Esqueci minha senha
          </a>
        </Subtitles>
        <button type="submit">Login</button>
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
