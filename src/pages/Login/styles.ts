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
  justify-content: center;

  margin: 2rem auto 0;
  width: 100%;
  max-width: 50vw;
  height: 500px;
  border-radius: 12px;
  gap: 2rem;
  padding: 3rem 5rem;

  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); ;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  display: block;

  font-size: 18px;
  padding: 1rem;
  border-radius: 4px;
  border: 2px solid #cacaca;
`;

export const Subtitles = styled.span`
  color: ${(props) => props.theme.colors.neutralGray};
  font-size: 18px;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  border-radius: 9px;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};

  border: none;
  cursor: pointer;
`;
