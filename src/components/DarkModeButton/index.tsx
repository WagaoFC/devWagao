import { useState } from 'react'
import { Container } from './styled'
import { BiMoon } from 'react-icons/bi'
import { BsSun } from 'react-icons/bs'

export function DarkModeButton() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    function alterMode() {
        if (darkMode) {
            setDarkMode(false)
        } else {
            setDarkMode(true)
        }
    }

    return(
        <Container onClick={alterMode}>
            {!darkMode ? <BsSun size={20} /> : <BiMoon size={20} />}
        </Container>
    )
}