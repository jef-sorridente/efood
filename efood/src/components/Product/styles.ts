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
  object-fit: cover;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const ModalContent = styled.div`
  max-width: 1024px;
  z-index: 2;
  padding: 32px;
  display: flex;
  background-color: ${colors.primary};
  color: ${colors.tertiary};
  position: relative;

  ${Image} {
    width: 280px;
    height: 280px;
  }

  ${Buttom} {
    width: 280px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 24px;
  }
`;

export const Close = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;
