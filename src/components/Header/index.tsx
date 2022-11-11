import { Container, AssistBox, MenuButton, CompanyImage } from "./styles";

interface HeaderProps {
  hasButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasButton }) => {
  return (
    <Container>
      <img
        src={process.env.PUBLIC_URL + "./logo.svg"}
        alt="Logo Brick"
        width={120}
      />
      {hasButton && (
        <AssistBox>
          <MenuButton>Assistência 24 horas</MenuButton>
          <CompanyImage>ED</CompanyImage>
        </AssistBox>
      )}
    </Container>
  );
};

export default Header;
