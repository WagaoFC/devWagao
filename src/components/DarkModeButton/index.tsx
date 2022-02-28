import { useState } from 'react'
import { Container } from './styled'
import { BiMoon } from 'react-icons/bi'
import { BsFillSunFill } from 'react-icons/bs'

type DarkModeProps = {
    active: () => void;
    checked: boolean;
}

export function DarkModeButton(props: DarkModeProps) {
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
            {!darkMode ? <BiMoon size={20} /> : <BsFillSunFill size={20} />}
        </Container>
    )
}