import { useContext } from 'react'
import { Container, NavMenu } from './styled'
import { DarkModeButton } from '../DarkModeButton'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'

interface Props {
    toggleTheme(): void
}

export function Header<Props>({toggleTheme}) {
    const { title } = useContext(ThemeContext)

    return (
        <Container>
                <a href="#">devWagao</a>
                <NavMenu>
                    <a href="#home">Início</a>
                    <a href="#about">Sobre</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#portfolio">Portfólio</a>
                    <a href="#contact">Contato</a>
                    {/* <DarkModeButton onChange={toggleTheme}/> */}
                    <Switch
                        onChange={toggleTheme}
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={15}
                        width={40}
                        handleDiameter={20}
                        offColor={'#011F3F'}
                        onColor={'#429FFD'}
                    />
                </NavMenu>
        </Container>
    )
}