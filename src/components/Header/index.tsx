import { Container, NavMenu } from './styled'
import { DarkModeButton } from '../DarkModeButton'

export function Header() {
    return (
        <Container>
                <a href="#">devWagao</a>
                <NavMenu>
                    <a href="#home">Início</a>
                    <a href="#about">Sobre</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#portfolio">Portfólio</a>
                    <a href="#contact">Contato</a>
                    <DarkModeButton />
                </NavMenu>
        </Container>
    )
}