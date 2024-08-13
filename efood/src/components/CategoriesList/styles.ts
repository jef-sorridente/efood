import styled from "styled-components";
import { Props } from ".";

export const Container = styled.div<Omit<Props, "categories">>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;
  margin: 80px 0;
`;
