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
            console.log('1')
        } else {
            setDarkMode(false)
            props.onChange()
            console.log('2')
        }
    }

    return(
        <Container onClick={alterMode}>
            {!darkMode ? <BiMoon size={20} /> : <BsSun size={20} />}
        </Container>
    )
}