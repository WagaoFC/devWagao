import { useContext } from 'react'
import { Container, HeaderMenu, NavMenu } from './styled'
import { DarkModeButton } from '../DarkModeButton'
import { ThemeContext } from 'styled-components'
// import Switch from 'react-switch'

type Props = {
    toggleTheme: () => void
}

export function Header({ toggleTheme }: Props) {
    const { title } = useContext(ThemeContext)

    return (
        <Container>
            <HeaderMenu>
                <a href="#">devWagao</a>
                <NavMenu>
                    <a href="#">Início</a>
                    <a href="#about">Sobre</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#portfolio">Portfólio</a>
                    <a href="#contact">Contato</a>
                    {/* <DarkModeButton onChange={toggleTheme}/> */}
                    {/* <Switch
                        onChange={toggleTheme}
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={15}
                        width={40}
                        handleDiameter={20}
                        offColor={'#011F3F'}
                        onColor={'#429FFD'}
                    /> */}
                </NavMenu>
            </HeaderMenu>
        </Container>
    )
}