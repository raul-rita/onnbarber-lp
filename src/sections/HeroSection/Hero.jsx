import { Container } from "./style";
import { Buttom } from "../../components/Buttom";
import { WhiteSubtitle } from "../../components/Subtitle";
import { WhiteTitle } from "../../components/Title";

const Hero = () => {
  return (
    <Container>
      <WhiteTitle>ONNBARBER</WhiteTitle>
      <WhiteSubtitle>O seu Sistema de Agendamento prático e rápido</WhiteSubtitle>
      <Buttom>EXPERIMENTE 30 DIAS GRÁTIS</Buttom>
    </Container>
  );
};

export default Hero;
