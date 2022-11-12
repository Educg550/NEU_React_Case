import { useState } from "react";
import { FormContainer, InputBox, Subtitles, Input, Button } from "./styles";

interface AddVehicleProps {
  isVisible: boolean;
}

const AddVehicle: React.FC<AddVehicleProps> = ({ isVisible }) => {
  const [plate, setPlate] = useState("");

  const handleAddVehicleClick = () => {};

  return (
    <FormContainer>
      <InputBox>
        <Subtitles>Senha</Subtitles>
        <Input
          type="text"
          placeholder="Digite a Placa do veículo"
          required
          onChange={(res: React.FormEvent<HTMLInputElement>) =>
            setPlate(res.currentTarget.value)
          }
        />
      </InputBox>
      <Button type="button">Adicionar</Button>
    </FormContainer>
  );
};

export default AddVehicle;
