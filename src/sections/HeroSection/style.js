import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  color: #333;
`;

export const Titulo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1d3557;
  margin-bottom: 1rem;
`;

export const Subtitulo = styled.p`
  font-size: 1.25rem;
  color: #457b9d;
  margin-bottom: 2rem;
`;

export const Botao = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #e63946;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d62828;
  }
`;
