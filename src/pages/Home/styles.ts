import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff6f4;
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
