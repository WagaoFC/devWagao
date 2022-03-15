import wagaoRelax from '../../assets/images/wagaoRelax.jpg'
import wagaoSerious from '../../assets/images/wagaoSerious.jpg'
import { Container, Text } from './styled'

export function About() {
    return (
        <Container>
            <img src={wagaoSerious} alt="Foto de Wagner" />
            <Text>
                <h1>Sobre mim</h1>
                <p>textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto</p>
                <p>textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto</p>
                <p>textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto</p>
                <p>textotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotextotexto</p>
            </Text>
        </ Container> 
    )
}