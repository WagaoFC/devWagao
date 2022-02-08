import Lottie from 'react-lottie'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import Typist from 'react-typist'
import animation from './animation.json'
import { Container, Icons, Text, MotionLottie } from './styled'

export function Main() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
    }

    return (
        <Container>
            <Icons>
                <a href="https://www.linkedin.com/in/wagnerferreiracosta/" target="_blank"><AiFillLinkedin size={30} /></a>
                <a href="https://github.com/WagaoFC" target="_blank"><AiFillGithub size={30} /></a>
                <a href="mailto:wagnerferreira_07@hotmail.com"><GrMail size={30} /></a>
            </Icons>
            <Text>
                <h1>Olá 👋, eu sou Wagner</h1>
                <Typist cursor={{ show: false }}>
                    <h2>Software Developer na <a href="https://www.zema.com/" target="_blank">Zema</a></h2>
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
    )
}