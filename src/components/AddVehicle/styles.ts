import styled from "styled-components";

export const FormContainer = styled.form``;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

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
