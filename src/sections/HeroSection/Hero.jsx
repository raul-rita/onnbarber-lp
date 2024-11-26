import { Container } from "./style";
import { Buttom } from "../../components/Buttom";
import { Subtitle } from "../../components/Subtitle";
import { Title } from "../../components/Title"

const Hero = () => {
  return (
    <Container>
      <Title>ONNBARBER</Title>
      <Subtitle>O seu Sistema de Agendamento prático e rápido</Subtitle>
      <Buttom>EXPERIMENTE 30 DIAS GRÁTIS</Buttom>
    </Container>
  );
};

export default Hero;
