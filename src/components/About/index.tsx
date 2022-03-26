import wagaoRelax from '../../assets/images/wagaoRelax.jpg'
import wagaoSerious from '../../assets/images/wagaoSerious.jpg'
import { Container, Text } from './styled'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'

export function About() {
    return (
        <Container>
            <Text>
                <h1>Um pouco sobre mim</h1>
                <br />
                <p>Junior Software Developer, com 10 meses de experiência</p>
                <p>Atualmente estou aprendendo muito sobre desenvolvimento web</p>
                <p>Dentre as tecnologias que uso atualmente gosto de destacar</p>
                <p className='Align'>
                    ReactJS <FaReact />,
                    Node.js <FaNodeJs /> e
                    Git <FaGitAlt /></p>
                <p>Focado em realizar entregas de qualidade que possam agregar valor ao negócio</p>
            </Text>
            <img src={wagaoSerious} alt="Foto de Wagner" />
        </ Container>
    )
}