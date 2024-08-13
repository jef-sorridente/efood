import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.footer`
  background-color: ${colors.secundary};
  color: ${colors.primary};
  text-align: center;
  padding: 40px 0;
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 40px 0 80px;
`;
