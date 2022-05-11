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
                <p>Software Developer, com 1 ano de experiência</p>
                <p>Atualmente estou aprendendo muito sobre desenvolvimento web</p>
                <p>Dentre as tecnologias que uso atualmente gosto de destacar</p>
                <p className='Tech'>
                    ReactJS <FaReact />,
                    Node.js <FaNodeJs /> e
                    Git <FaGitAlt /></p>
                <p>Focado em realizar entregas de qualidade que possam agregar valor ao negócio</p>
                <br />
                <p>Para saber mais acesse meu perfil no <strong><a href="https://www.linkedin.com/in/wagnerferreiracosta/" target="_blank">Linkedin</a></strong></p>
            </Text>
            <img src={wagaoSerious} alt="Foto de Wagner" />
        </ Container>
    )
}