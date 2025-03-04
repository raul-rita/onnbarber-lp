import { Buttom } from "../../components/Buttom";
import { DarkTitle } from "../../components/Title";
import { Container, Card } from "./style";

const Price = () => {
  return(
    <Container>
      <DarkTitle>Conheça nossos planos</DarkTitle>
      <div>
        <Card>
          <h3>1 Profissional</h3>
          <span>R$24,90/mês</span>
          <p>ou R$239,90/ano (20% OFF)</p>
          <Buttom>Quero esse plano</Buttom>
        </Card>

        <Card>
          <h3>1 Profissional</h3>
          <span>R$24,90/mês</span>
          <p>ou R$239,90/ano (20% OFF)</p>
          <Buttom>Quero esse plano</Buttom>
        </Card>

        <Card>
          <h3>1 Profissional</h3>
          <span>R$24,90/mês</span>
          <p>ou R$239,90/ano (20% OFF)</p>
          <Buttom>Quero esse plano</Buttom>
        </Card>
      </div>
    </Container>
  )
}

export default Price;