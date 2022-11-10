import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem auto 0;

  width: 100%;
  max-width: 50vw;
  height: 200px;
  border-radius: 12px;
  gap: 1rem;
  padding: 3rem;

  background: ${(props) => props.theme.colors.white};
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.black};
`;

export const Input = styled.input`
  width: 100%;
  display: block;
`;

export const Subtitles = styled.span`
  color: ${(props) => props.theme.colors.neutralGray};
  font-size: 18px;
`;
