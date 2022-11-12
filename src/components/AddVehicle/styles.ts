import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50vw;
  min-height: 250px;
  border-radius: 12px;
  padding: 3rem;
  gap: 1rem;

  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
`;

export const Title = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  gap: 0.5rem;

  text-align: left;
`;

export const Input = styled.input`
  max-width: 100%;
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
