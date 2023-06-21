import { FaPeopleCarry, FaUserAstronaut, FaBoxes, FaLightbulb} from 'react-icons/fa'
import { GiTalk, GiChameleonGlyph } from 'react-icons/gi'
import { RiEmotionFill } from 'react-icons/ri'
import { MdOutlineSchedule, MdFilterCenterFocus } from 'react-icons/md'
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
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="Atitude positiva">
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
                        <GiChameleonGlyph />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="Organização">
                        <FaBoxes />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards data-tooltip-id="my-tooltip-bottom" data-tooltip-content="Pontual">
                        <MdOutlineSchedule />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards data-tooltip-id="my-tooltip-bottom" data-tooltip-content="Criatividade">
                        <FaLightbulb />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards data-tooltip-id="my-tooltip-bottom" data-tooltip-content="Foco">
                        <MdFilterCenterFocus />
                    </Cards>
                </ motion.div>

                <Tooltip
                    id='my-tooltip'
                    place='top'
                    className='customTooltip'
                />

                <Tooltip
                    id='my-tooltip-bottom'
                    place='bottom'
                    className='customTooltip'
                />
            </Container>
    )
}