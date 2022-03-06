import Lottie from 'react-lottie'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import Typist from 'react-typist'
import animation from './animation.json'
import animationConstruction from './animationConstruction.json'
import { Container, Icons, Text, MotionLottie, Section } from './styled'

export function Main() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
    }

    const defaultOptionsConstruction = {
        loop: true,
        autoplay: true,
        animationData: animationConstruction,
    }

    return (
        <>
            <Container>
                <Icons>
                    <a href="https://www.linkedin.com/in/wagnerferreiracosta/" target="_blank"><AiFillLinkedin size={30} /></a>
                    <a href="https://github.com/WagaoFC" target="_blank"><AiFillGithub size={30} /></a>
                    <a href="mailto:wagnerferreira_07@hotmail.com"><GrMail size={30} /></a>
                </Icons>
                <Text>
                    <h1>Olá 👋, me chamo Wagner</h1>
                    <Typist cursor={{ show: false }}>
                        <h2>Sou Software Developer na <a href="https://www.zema.com/" target="_blank">Zema</a></h2>
                    </Typist>
                    <h3>Atualmente vivo o maior desafio da minha vida,<br/> ser um ótimo desenvolvedor.</h3>
                </Text>
                <MotionLottie>
                    <Lottie
                        options={defaultOptions}
                        height={600}
                        width={600}
                    />
                </MotionLottie>
            </Container>
            <Section>
                <section id="about">Estou trabalhando aqui 😅
                    <Lottie
                        options={defaultOptionsConstruction}
                        height={600}
                        width={600}
                    />
                </section>
                <section id="skills">Estou trabalhando aqui 😅
                    <Lottie
                        options={defaultOptionsConstruction}
                        height={600}
                        width={600}
                    />
                </section>
                <section id="portfolio">Estou trabalhando aqui 😅
                    <Lottie
                        options={defaultOptionsConstruction}
                        height={600}
                        width={600}
                    />
                </section>
                <section id="contact">Estou trabalhando aqui 😅
                    <Lottie
                        options={defaultOptionsConstruction}
                        height={600}
                        width={600}
                    />
                </section>
                <footer>
                    <p>Desenvolvido com muito 💖 por Wagner Ferreira Costa</p>
                </footer>
            </Section>
        </>
    )
}