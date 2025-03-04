import styled from "styled-components";
import { colors, fonts, spacing } from "../styles/variables";

export const Buttom = styled.button`
  padding: ${spacing.small};
  font-size: ${fonts.principal};
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.white};
  background-color: ${colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.secundary};
  }
`;