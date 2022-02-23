import { Container } from './styled'
import { IoClose } from 'react-icons/io5'

type Props = {
    menuIsVisible: boolean,
    setMenuIsVisible: (active: boolean) => void
}

export function MenuMobile({menuIsVisible, setMenuIsVisible}: Props) {
    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
            <nav>
                <a href="#">Início</a>
                <a href="#about">Sobre</a>
                <a href="#skills">Habilidades</a>
                <a href="#portfolio">Portfólio</a>
                <a href="#contact">Contato</a>
            </nav>
        </Container>
    )
}