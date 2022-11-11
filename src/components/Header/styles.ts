import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  width: 100%;
  height: 82px;

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
