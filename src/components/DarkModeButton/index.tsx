import { useState } from 'react'
import { Container } from './styled'
import { BiMoon } from 'react-icons/bi'
import { BsSun } from 'react-icons/bs'

type DarkModeProps = {
    onChange(): void;
    checked: boolean;
}

export function DarkModeButton(props: DarkModeProps) {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    
    function alterMode() {
        if (!darkMode) {
            setDarkMode(true)
            props.onChange()
        } else {
            setDarkMode(false)
            props.onChange()
        }
    }

    return(
        <Container onClick={alterMode}>
            {!darkMode ? <BiMoon size={20} /> : <BsSun size={20} />}
        </Container>
    )
}