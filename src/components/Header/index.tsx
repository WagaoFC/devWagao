import { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { Container, HeaderMenu, NavMenu } from './styled'
import { DarkModeButton } from '../DarkModeButton'

type DarkModeProps = {
    toggleTheme(): void
}

export function Header(props: DarkModeProps) {
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
                    <DarkModeButton onChange={props.toggleTheme} checked={title === 'dark'}/>
                </NavMenu>
            </HeaderMenu>
        </Container>
    )
}