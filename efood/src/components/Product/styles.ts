import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 320px;
  height: 338px;
  padding: 8px;
  font-size: 14px;
  line-height: 22px;
  background-color: ${colors.primary};
  color: ${colors.secundary};
`;

export const Image = styled.img`
  width: 100%;
  height: 167px;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
`;

export const Buttom = styled.button`
  background-color: ${colors.secundary};
  color: ${colors.primary};
  font-weight: bold;
  border: none;
  width: 100%;
  padding: 4px;
  margin-top: 8px;
  cursor: pointer;
`;
