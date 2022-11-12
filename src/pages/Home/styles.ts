import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.white};
  height: 100vh;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
`;

export const AddButton = styled.button`
  max-width: 200px;
  max-height: 35px;
  border-radius: 2px;
  padding: 0.25rem, 0.5rem;

  font-weight: 600;
  font-size: 14px;

  background: none;
  color: ${(props) => props.theme.colors.black};
  outline: 1px solid ${(props) => props.theme.colors.black};
  border: none;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 38vh;
  right: 25vw;

  z-index: 1;

  font-size: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  justify-content: center;

  gap: 15px;
  padding: 10px;

  max-width: 100vw;
`;
