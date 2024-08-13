import styled from "styled-components";
import { colors } from "../../styles";

export const Banner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 280px;
  font-size: 32px;
  color: ${colors.tertiary};
`;

export const Background = styled.div`
  width: 100%;
  height: 280px;
  background-color: #00000050;
`;

export const Category = styled.h3`
  font-weight: 100;
  position: absolute;
  top: 32px;
`;

export const Title = styled.h3`
  position: absolute;
  bottom: 32px;
`;
