import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.orange};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 250px;
  height: 300px;
  padding: 3rem 2rem;
  border-radius: 10px;

  color: ${(props) => props.theme.colors.neutralBlack};
  background: ${(props) => props.theme.colors.white};
`;

export const ImageContainer = styled.div`
  border-bottom: 0.5px solid #ddd;
  width: 100%;
`;

export const VehicleDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 45px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14.25px;
`;

export const Plate = styled.p`
  font-weight: 400;
  font-size: 12.6px;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 9.5px;
  color: ${(props) => props.theme.colors.neutralGray};
`;
