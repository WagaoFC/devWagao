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
    SiCsharp,
    SiAngular
} from 'react-icons/si'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Cards, Container } from "./styled";

export function HardSkillsCard() {
    return (
            <Container>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="HTML">
                        <SiHtml5 />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 110 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="CSS">
                        <SiCss3 />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="JavaScript">
                        <SiJavascript />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 90 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="TypeScript">
                        <SiTypescript />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="ReactJS">
                        <SiReact />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="Angular">
                        <SiAngular />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="Styled Components">
                        <SiStyledcomponents />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards data-tooltip-id="my-tooltip" data-tooltip-content="C#">
                        <SiCsharp />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    <Cards data-tooltip-id="my-tooltip-bottom" data-tooltip-content="Node.js">
                        <SiNodedotjs />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 110 }}
                >
                    <Cards data-tooltip-id="my-tooltip-bottom" data-tooltip-content="SQL Server">
                        <SiMicrosoftsqlserver />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <Cards data-tooltip-id="my-tooltip-bottom" data-tooltip-content="Git">
                        <SiGit />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 90 }}
                >
                    <Cards data-tooltip-id="my-tooltip-bottom" data-tooltip-content="GitHub">
                        <SiGithub />
                    </Cards>
                </ motion.div>
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 80 }}
                >
                    <Cards data-tooltip-id="my-tooltip-bottom" data-tooltip-content="Visual Studio Code">
                        <SiVisualstudiocode />
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