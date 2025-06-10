import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.form`
  background-color: ${colors.primary};
  color: ${colors.secundary};
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  display: none;
  z-index: 1;

  &.is-open {
    display: block;
  }
`;

export const Card = styled.div`
  display: none;

   &.is-open {
    display: block;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .text {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 34px;
`;

export const InputGroup = styled.div`
  padding-top: 8px;
  width: 100%;

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    width: 100%;
  }

  input {
    display: block;
    font-weight: 700;
    width: 100%;
    font-size: 14px;
    background-color: ${colors.secundary};
    border: none;
    padding: 8px;
    margin-top: 8px;
    outline: none;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 24px;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 8px;
  display: block;
  border: none;
  background-color: ${colors.secundary};
  color: ${colors.primary};
  padding: 4px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;