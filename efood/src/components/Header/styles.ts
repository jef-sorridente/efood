import styled from "styled-components";
import { colors } from "../../styles";
import { Props } from ".";
import { Link } from "react-router-dom";

export const Header = styled.header`
  padding: 40px 0;
  text-align: center;
  font-weight: bold;
  color: ${colors.primary};
`;

export const logo = styled.h1`
  width: 125px;
  height: 58px;
  margin: 0 auto;
`;

export const Text = styled.h2`
  font-size: 36px;
`;

export const Head = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-bottom: ${(props) => (props.page === "home" ? "140px" : "0px")};

  img {
    margin-left: ${(props) => (props.page === "home" ? "0px" : "28px")};
  }
`;

export const BtnBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.primary};
`;
