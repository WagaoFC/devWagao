import wagaoSerious from '../../assets/images/wagaoSerious.jpg'
import { Container, Text } from './styled'

export function About() {
    return (
        <Container>
            <Text>
                <h1>Um pouco sobre mim</h1>
                <br />
                <span>
                    Também sou conhecido como Wagão. Sou mineiro e tenho 28 anos.
                    Adoro tecnologia e procuro sempre criar soluções criativas para
                    os desafios que surgem.
                </span>
                <span>
                    Além disso, gosto de fazer churrasco com a família e amigos, jogar
                    video games e futebol, viajar, assistir séries e filmes nas horas vagas.
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
                <span>Para saber mais acesse meu perfil no&nbsp;
                    <strong>
                        <a href="https://www.linkedin.com/in/wagnerferreiracosta/" target="_blank">Linkedin</a>
                    </strong>
                </span>
            </Text>
            <img src={wagaoSerious} alt="Foto de Wagner" />
        </ Container>
    )
}