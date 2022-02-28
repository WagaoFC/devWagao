import { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Container, HeaderMenu, NavMenu } from './styled'
import { DarkModeButton } from '../DarkModeButton'
import { MenuMobile } from '../MenuMobile'
import Switch from 'react-switch'

type DarkModeProps = {
    toggleTheme: () => void
}

export function Header(props: DarkModeProps) {
    const { title } = useContext(ThemeContext)
    const [menuIsVisible, setMenuIsVisible] = useState(true)

    return (
        <Container>
            {/* <MenuMobile 
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            /> */}
            <HeaderMenu>
                <a href="#">devWagao</a>
                <NavMenu>
                    <a href="#">Início</a>
                    <a href="#about">Sobre</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#portfolio">Portfólio</a>
                    <a href="#contact">Contato</a>
                    <DarkModeButton active={props.toggleTheme} checked={title === 'dark'}/>
                    <Switch
                        onChange={props.toggleTheme}
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={15}
                        width={40}
                        handleDiameter={20}
                        offColor={'#011F3F'}
                        onColor={'#429FFD'}
                    />
                    <GiHamburgerMenu className='hamburgerMenu' size={20} />
                </NavMenu>
            </HeaderMenu>
        </Container>
    )
}