import React from "react";
import { ContainerForm, Input, Subtitles, Title } from "./styles";
import { handleLogin } from "../../services/vehiclesService";

const FormCard: React.FC = () => {
  return (
    <ContainerForm>
      <Title>Login</Title>
      <Input type="text" />
      <Input type="text" />
      <Subtitles>
        <a href="https://brick-by-brick.notion.site/PS-NEU-Case-48fe48a964f3483c8c568ffb0a7f6932">
          Esqueci minha senha
        </a>
      </Subtitles>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <Subtitles>
        Ainda não tem conta?
        <a href="https://brick-by-brick.notion.site/PS-NEU-Case-48fe48a964f3483c8c568ffb0a7f6932">
          {" "}
          Cria minha conta
        </a>
      </Subtitles>
    </ContainerForm>
  );
};

export default FormCard;
