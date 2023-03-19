import { FaPeopleCarry, FaUserAstronaut} from 'react-icons/fa'
import { GiTalk } from 'react-icons/gi'
import { RiEmotionFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { Cards, Container } from "./styled";

export function SoftSkillsCard() {
    return (
            <Container>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    <Cards>
                        <FaPeopleCarry />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 110 }}
                >
                    <Cards>
                        <GiTalk />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <Cards>
                        <RiEmotionFill />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 90 }}
                >
                    <Cards>
                        <FaUserAstronaut />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards>
                        <FaUserAstronaut />
                    </Cards>
                </ motion.div>
            </Container>
    )
}