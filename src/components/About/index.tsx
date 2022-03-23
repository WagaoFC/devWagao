import wagaoRelax from '../../assets/images/wagaoRelax.jpg'
import wagaoSerious from '../../assets/images/wagaoSerious.jpg'
import { Container, Text } from './styled'

export function About() {
    return (
        <Container>
            <img src={wagaoSerious} alt="Foto de Wagner" />
            <Text>
                <h1>Sobre mim</h1>
                <p>Junior Software Developer, com 10 meses de experiência</p>
                <p>Atualmente estou aprendendo muito sobre desenvolvimento web</p>
                <p>Dentre as tecnologias que uso atualmente gosto de destacar ReactJS, Node.js e Git</p>
                <p>Focado em realizar entregas de qualidade que possam agregar valor ao negócio</p>
            </Text>
        </ Container>
    )
}