import Header from "../../components/Header";
import { Wrapper, TitleBox, Title, AddButton, Card } from "./styles";

function Home() {
  return (
    <Wrapper>
      <Header hasButton={true} />
      <TitleBox>
        <Title>Lista de veículos</Title>
        <AddButton>Adicionar veículo</AddButton>
      </TitleBox>
      <div>
        <Card></Card>
      </div>
    </Wrapper>
  );
}

export default Home;
