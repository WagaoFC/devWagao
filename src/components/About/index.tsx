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
                {/* <ul>
                    <li>Software Developer com pouco mais de 1 ano de experiência</li>
                    <li>Atualmente estou aprendendo muito sobre desenvolvimento web</li>
                    <li>Dentre as tecnologias que uso atualmente gosto de destacar:</li>
                    <p className='Tech'>
                        <FaReact /> ReactJS
                    </p>
                    <p className='Tech'>
                        <FaNodeJs /> Node.js
                    </p>
                    <p className='Tech'>
                        <FaGitAlt /> Git
                    </p>
                    <li>Cursando Engenharia de Software</li>
                    <li>Focado em realizar entregas de qualidade que possam agregar valor ao negócio</li>
                </ul> */}
                <span>
                    Também sou conhecido como Wagão. Sou mineiro e tenho 28 anos.
                    Adoro tecnologia e procuro sempre criar soluções criativas para
                    os desafios que surgem.
                </span>
                <span>
                    Além disso, gosto de fazer churrasco com a familia e amigos, jogar
                    video games, viajar e assistir séries e filmes nas horas vagas.
                </span> 
                <span>
                    Trabalho muito bem em equipe e tenho boa comunicação, sempre procurando
                    ouvir e colaborar com meus colegas de trabalho. Focado em realizar entregas
                    de qualidade que possam agregar valor ao negócio.
                </span>
                <span>
                    Atualmente, estou me especializando em ReactJS e cursando Engenharia
                    de Software na Cruzeiro do Sul.
                </span>
                <br />
                <p>Para saber mais acesse meu perfil no&nbsp;
                    <strong>
                        <a href="https://www.linkedin.com/in/wagnerferreiracosta/" target="_blank">Linkedin</a>
                    </strong>
                </p>
            </Text>
            <img src={wagaoSerious} alt="Foto de Wagner" />
        </ Container>
    )
}