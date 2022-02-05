import { BiMoon } from 'react-icons/bi'
import { Container, NavMenu } from './styled'

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
                    <BiMoon size={20}/>               
                </NavMenu>
        </Container>
    )
}