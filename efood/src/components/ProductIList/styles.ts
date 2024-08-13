import styled from "styled-components";
import { colors } from "../../styles";

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 56px 0 120px;
`;

export const Mensage = styled.div`
  margin: 150px 0;
  text-align: center;
  font-size: 18px;
  color: ${colors.primary};

  a {
    color: #000;
  }
`;
