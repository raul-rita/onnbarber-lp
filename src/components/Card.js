import styled from "styled-components";
import { colors, spacing } from "../styles/variables";

export const Card = styled.div `
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  padding: ${spacing.small};

  width: 320px;

  text-align: left;
  border-radius: 8px 8px;
  border: 1px solid ${colors.black};
  box-shadow: 8px 8px 12px  rgba(0, 0, 0, 0.3);

  h2 {
    font-weight: bold;
  }

`