import React, { useState } from "react";
import { getVehicles } from "./services/vehiclesService";

import Header from "./components/Header";
import { Wrapper, Title } from "./styles/Vehicles";
import { AuthProps } from "./utils/constants";

function Vehicles() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <Header hasButton={true} />
      <Title>Lista de veículos</Title>
      <button>Adicionar veículo</button>
    </Wrapper>
  );
}

export default Vehicles;
