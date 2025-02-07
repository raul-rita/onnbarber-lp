import { DarkTitle } from "../../components/Title"
import { Container } from "../About/style";
import { DarkText } from "../../components/Text"
import { DarkSubtitle } from "../../components/Subtitle";
import { Card } from "../../components/Card";

function About() {
    return (
        <Container>
            <DarkTitle>Sobre</DarkTitle>
            <DarkText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis cum hic consectetur. Officia repellat adipisci vel esse. Ipsum excepturi tempore pariatur optio animi repudiandae laborum possimus commodi, cumque provident!
            </DarkText>
            <DarkText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in distinctio expedita vitae facilis vero excepturi, officia dicta pariatur, ut explicabo. Reprehenderit aperiam recusandae repellat enim voluptas, minima obcaecati consectetur!
            </DarkText>
            <DarkTitle>Com o AppBARBER você:</DarkTitle>
            <div>
                <Card>
                    <DarkSubtitle>Otimiza o seu tempo</DarkSubtitle>
                    <DarkText>Estimulando os seus clientes a agendar diretamente no Sistema você não precisa ficar fazendo atendimento personalizado no WhatsApp, garantindo mais tempo para focar nos cortes
                    </DarkText>
                </Card>
                <Card>
                    <DarkSubtitle>Otimiza o seu tempo</DarkSubtitle>
                    <DarkText>Estimulando os seus clientes a agendar diretamente no Sistema você não precisa ficar fazendo atendimento personalizado no WhatsApp, garantindo mais tempo para focar nos cortes
                    </DarkText>
                </Card>
            </div>
        </Container>
    )
}

export default About;