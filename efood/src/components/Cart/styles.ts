import styled from "styled-components";
import { colors } from "../../styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  font-size: 14px;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  color: ${colors.secundary};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px;
  z-index: 1;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
  }
`;

export const CartItem = styled.li`
  background-color: ${colors.secundary};
  color: ${colors.primary};
  position: relative;
  display: flex;
  padding: 8px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    gap: 16px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  .trash {
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 16px;
`;
