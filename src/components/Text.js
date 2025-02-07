import styled from "styled-components";
import { colors, spacing } from "../styles/variables";

export const DarkText = styled.p `
  font-size: 1.rem;
  color: ${colors.black};
  text-align: left;
  /* margin-bottom: ${spacing.small}; */
`;

export const WhiteText = styled.p `
  font-size: 1rem;
  color: ${colors.white};
`;