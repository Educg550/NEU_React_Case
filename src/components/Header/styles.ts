import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  width: 100%;
  height: 82px;

  background: ${(props) => props.theme.colors.white};
`;

export const AssistBox = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const MenuButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  padding: 0.5rem;
  border-radius: 2px;

  background: ${(props) => props.theme.colors.orange};
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
`;

export const CompanyImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border-radius: 20px;

  font-weight: 700;
  font-size: 14px;

  background: rgba(26, 26, 26, 0.1);
`;
