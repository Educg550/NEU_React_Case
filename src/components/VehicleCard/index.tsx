import { VehicleProps } from "../../pages/Home";
import { Container } from "./styles";

const VehicleCard: React.FC<VehicleProps> = ({
  id,
  make,
  model,
  chassis,
  model_year,
  color,
  plate,
  photo,
  created_at,
  fipe,
  fipe_code,
  make_year,
}) => {
  return <Container></Container>;
};

export default VehicleCard;
