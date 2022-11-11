import { useState } from "react";
import AddVehicle from "../../components/AddVehicle";
import Header from "../../components/Header";
import { Wrapper, TitleBox, Title, AddButton, Card } from "./styles";

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Wrapper>
      <Header hasButton={true} />
      <TitleBox>
        <Title>Lista de veículos</Title>
        <AddButton onClick={handleToggleModal}>Adicionar veículo</AddButton>
      </TitleBox>
      <div>
        <Card></Card>
      </div>
      <AddVehicle isVisible={isModalVisible} />
    </Wrapper>
  );
}

export default Home;
