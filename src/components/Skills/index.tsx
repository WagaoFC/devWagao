import { FaTools } from 'react-icons/fa'
import { MdEmojiPeople } from 'react-icons/md'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript } from 'react-icons/si'
import { Container } from './styled'

export function Skills() {
    return (
        <Container>
            <button>
                <MdEmojiPeople size="25" />
                Soft Skills
            </button>
            <button>
                <FaTools size="20" />
                Hard Skills
            </button>
        </ Container>
    )
}