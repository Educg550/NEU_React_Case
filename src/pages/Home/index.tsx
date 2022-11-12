import { useEffect, useState } from "react";
import AddVehicle from "../../components/AddVehicle";
import Header from "../../components/Header";
import VehicleCard from "../../components/VehicleCard";
import { getVehicles } from "../../utils/api";
import {
  Wrapper,
  TitleBox,
  Title,
  AddButton,
  CloseButton,
  CardsContainer,
} from "./styles";

export interface VehicleProps {
  id: number;
  make: string;
  model?: string;
  chassis: string;
  model_year: string;
  color?: string;
  plate: string;
  photo?: any;
  created_at: Date;
  fipe?: string;
  fipe_code?: string;
  make_year?: string;
}

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [vehicleList, setVehicleList] = useState<VehicleProps[]>([]);

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const fetchVehicles = async (token: string) => {
      const vehicles = await getVehicles(token);
      if (vehicles) setVehicleList(vehicles);
      else console.log("Houve um erro ao obter os veículos...");
    };

    const cookieToken = localStorage.getItem("authToken");
    if (cookieToken) {
      fetchVehicles(cookieToken);
    } else {
      console.log("Houve um erro ao obter o cookie...");
    }
  }, []);

  return (
    <Wrapper>
      <Header hasButton={true} />
      <TitleBox>
        <Title>Lista de veículos</Title>
        <AddButton onClick={handleToggleModal}>Adicionar veículo</AddButton>
      </TitleBox>
      <CardsContainer>
        {vehicleList.map((vehicleData) => {
          return <VehicleCard key={vehicleData.id} {...vehicleData} />;
        })}
      </CardsContainer>
      {isModalVisible && (
        <CloseButton onClick={handleToggleModal}>
          <img
            src={process.env.PUBLIC_URL + "./close.svg"}
            alt="Close icon"
            width={20}
          />
        </CloseButton>
      )}
      <AddVehicle isVisible={isModalVisible} />
    </Wrapper>
  );
}

export default Home;
