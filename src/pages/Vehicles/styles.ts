import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff6f4;
  height: 100vh;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
`;

export const Button = styled.button`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  border-radius: 9px;
  padding: 1rem 0;

  background: none;
  color: ${(props) => props.theme.colors.white};
  outline: 2px solid ${(props) => props.theme.colors.black};
  border: none;
  cursor: pointer;
`;
