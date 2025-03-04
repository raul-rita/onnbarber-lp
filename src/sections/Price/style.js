import styled from "styled-components";
import { spacing } from "../../styles/variables";
import { Card as CardBase } from "../../components/Card";

export const Container = styled.div `
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  
    /* min-height: 500px; */
    padding: ${spacing.large};
    gap: ${spacing.medium};
  
    div {
      display: flex;
      gap: ${spacing.medium};
    }
`

export const Card = styled(CardBase)`
  text-align: center;
`  