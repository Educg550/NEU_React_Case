import { useState } from "react";

import Header from "../../components/Header";
import { Wrapper, Title } from "./styles";

function Vehicles() {
  return (
    <Wrapper>
      <Header hasButton={true} />
      <Title>Lista de veículos</Title>
      <button>Adicionar veículo</button>
    </Wrapper>
  );
}

export default Vehicles;
