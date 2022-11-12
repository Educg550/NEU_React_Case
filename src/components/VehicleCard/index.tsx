import { VehicleProps } from "../../pages/Home";
import {
  Container,
  ImageContainer,
  VehicleDataContainer,
  InfoContainer,
  Title,
  Plate,
  Subtitle,
} from "./styles";

const VehicleCard: React.FC<VehicleProps> = ({ make, model, plate, photo }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={photo} alt={model} width={250} />
        <Title>{model}</Title>
      </ImageContainer>
      <VehicleDataContainer>
        <InfoContainer>
          <Plate>{plate}</Plate>
          <Plate>{make}</Plate>
        </InfoContainer>
        <InfoContainer>
          <Subtitle>Placa</Subtitle>
          <Subtitle>Marca</Subtitle>
        </InfoContainer>
      </VehicleDataContainer>
    </Container>
  );
};

export default VehicleCard;
