import styled from "styled-components";
import { spacing } from "../../styles/variables";

export const Container = styled.section `
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
  
`;