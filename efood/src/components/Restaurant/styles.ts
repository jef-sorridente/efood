import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const Card = styled.div`
  width: 472px;
  background-color: ${colors.tertiary};
  color: ${colors.primary};
  position: relative;
  font-size: 14px;
  font-weight: 700;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const Description = styled.p`
  margin: 16px 0;
  font-weight: 400;
`;

export const Score = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Image = styled.div`
  max-height: 217px;
  img {
    width: 100%;
    max-height: 217px;
    object-fit: cover;
  }
`;

export const Infos = styled.div`
  border: 1px solid ${colors.primary};
  padding: 8px;
`;

export const TagContainer = styled.div`
  display: flex;
  position: absolute;
  gap: 8px;
  top: 16px;
  right: 16px;
`;

export const Tag = styled.div`
  padding: 6px 4px;
  background-color: ${colors.primary};
  color: ${colors.secundary};
  display: inline-block;
`;

export const LinkCustom = styled(Link)`
  font-weight: bold;
  background-color: ${colors.primary};

  border: none;
  padding: 4px 6px;
  cursor: pointer;

  color: ${colors.secundary};
  text-decoration: none;
`;
