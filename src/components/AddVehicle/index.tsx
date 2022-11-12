import { useState } from "react";
import { createVehicle } from "../../utils/api";
import {
  Overlay,
  FormContainer,
  Title,
  InputBox,
  Subtitles,
  Input,
  Button,
} from "./styles";

interface AddVehicleProps {
  isVisible: boolean;
}

const AddVehicle: React.FC<AddVehicleProps> = ({ isVisible }) => {
  const [plate, setPlate] = useState("");

  const handleAddVehicleClick = async () => {
    const cookieToken = localStorage.getItem("authToken");
    if (cookieToken) {
      await createVehicle(cookieToken, plate);
      window.location.reload();
    } else console.log("Não foi possível autenticar o usuário atual...");
  };

  return isVisible ? (
    <Overlay>
      <FormContainer>
        <Title>Adicionar veículo</Title>
        <InputBox>
          <Subtitles>Placa</Subtitles>
          <Input
            type="text"
            placeholder="Digite a Placa do veículo"
            required
            onChange={(res: React.FormEvent<HTMLInputElement>) =>
              setPlate(res.currentTarget.value)
            }
          />
        </InputBox>
        <Button type="button" onClick={handleAddVehicleClick}>
          Adicionar
        </Button>
      </FormContainer>
    </Overlay>
  ) : (
    <></>
  );
};

export default AddVehicle;
