import { useState } from 'react'
import { FaTools } from 'react-icons/fa'
import { MdEmojiPeople } from 'react-icons/md'
import { Container } from './styled'

export function Skills() {
    const [changeSkill, setChangeSkill] = useState('soft');

    return (
        <Container>
            <button onClick={() => setChangeSkill('soft')}>
                <MdEmojiPeople size="25" />
                Soft Skills
            </button>
            <button onClick={() => setChangeSkill('hard')}>
                <FaTools size="20" />
                Hard Skills
            </button>
        </ Container>
    )
}