import { FaPeopleCarry, FaUserAstronaut} from 'react-icons/fa'
import { GiTalk } from 'react-icons/gi'
import { RiEmotionFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Cards, Container } from "./styled";

export function SoftSkillsCard() {    
    return (
            <Container>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="Trabalho em equipe">
                        <FaPeopleCarry />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 110 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="Comunicação">
                        <GiTalk />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="Atitude positivo">
                        <RiEmotionFill />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 90 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="Flexibilidade">
                        <FaUserAstronaut />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="Adaptabilidade">
                        <FaUserAstronaut />
                    </Cards>
                </ motion.div>

                <Tooltip
                    id='my-tooltip'
                    place='top'
                    className='customTooltip'
                />
            </Container>
    )
}