import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff6f4;
  height: 100vh;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem auto 0;
  width: 100%;
  max-width: 50vw;
  height: 500px;
  border-radius: 12px;
  gap: 1rem;
  padding: 3rem;

  background: ${(props) => props.theme.colors.white};
`;

export const Title = styled.h2`
  font-size: 24px;
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
