import Lottie from 'react-lottie'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import Typist from 'react-typist'
import animation from './animation.json'
import animationConstruction from './animationConstruction.json'
import { Container, Icons, Text, MotionLottie, Section } from './styled'
import { ScrollTop } from '../ScrollTop'
import { About } from '../About'
import { Skills } from '../Skills'
import { Contact } from '../Contact'
import { Portfolio } from '../Portfolio'

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
                        <h2>Sou Front-end Developer na <a href="https://br.linkedin.com/company/bittecnologia" target="_blank">Bit Tech</a></h2>
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
                <section id="about">
                   <About />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="portfolio">
                    <Portfolio />
                    <Lottie
                        options={defaultOptionsConstruction}
                        height={600}
                        width={600}
                    />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <footer>
                    <hr/>
                    <p>Desenvolvido com muito 💖 por Wagner Ferreira Costa</p>
                </footer>
            </Section>
            <ScrollTop />
        </>
    )
}