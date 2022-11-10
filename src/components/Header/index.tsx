import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <img
        src={process.env.PUBLIC_URL + "./logo.svg"}
        alt="Logo Brick"
        width={120}
      />
    </Container>
  );
};

export default Header;
