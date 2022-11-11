import { Container } from "./styles";

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
        <div>
          <button>Assistência 24 horas</button>
          <div>ED</div>
        </div>
      )}
    </Container>
  );
};

export default Header;
