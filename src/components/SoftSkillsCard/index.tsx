import { 
    FaPeopleCarry,
    FaUserAstronaut
} from 'react-icons/fa'
import { GiTalk } from 'react-icons/gi'
import { RiEmotionFill } from 'react-icons/ri'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Cards, Container } from "./styled";

export function SoftSkillsCard() {
    return (
            <Container>
                <Cards>
                    <FaPeopleCarry />
                </Cards>
                <Cards>
                    <GiTalk />
                </Cards>
                <Cards>
                    <RiEmotionFill />
                </Cards>
                <Cards>
                    <FaUserAstronaut />
                </Cards>
                <Cards>
                    <FaUserAstronaut />
                </Cards>
            </Container>
    )
}