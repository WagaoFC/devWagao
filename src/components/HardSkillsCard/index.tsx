import { 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiReact, 
    SiTypescript, 
    SiStyledcomponents, 
    SiNodedotjs, 
    SiMicrosoftsqlserver, 
    SiGit, 
    SiGithub,
    SiVisualstudiocode,
    SiCsharp
} from 'react-icons/si'
import { motion } from 'framer-motion'
import { Cards, Container } from "./styled";

export function HardSkillsCard() {
    return (
            <Container>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    <Cards>
                        <SiHtml5 />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 110 }}
                >
                    <Cards>
                        <SiCss3 />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <Cards>
                        <SiJavascript />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 90 }}
                >
                    <Cards>
                        <SiReact />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards>
                        <SiTypescript />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 70 }}
                >
                    <Cards>
                        <SiStyledcomponents />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    <Cards>
                        <SiCsharp />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 110 }}
                >
                    <Cards>
                        <SiNodedotjs />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <Cards>
                        <SiMicrosoftsqlserver />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 90 }}
                >
                    <Cards>
                        <SiGit />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards>
                        <SiGithub />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 70 }}
                >
                    <Cards>
                        <SiVisualstudiocode />
                    </Cards>
                </ motion.div>
            </Container>
    )
}