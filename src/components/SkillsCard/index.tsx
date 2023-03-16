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
import { Cards, Container } from "./styled";

export function SkillsCard() {
    return (
        <>
            <Container>
                <Cards>
                    <SiHtml5 />
                </Cards>
                <Cards>
                    <SiCss3 />
                </Cards>
                <Cards>
                    <SiJavascript />
                </Cards>
                <Cards>
                    <SiReact />
                </Cards>
                <Cards>
                    <SiTypescript />
                </Cards>
                <Cards>
                    <SiStyledcomponents />
                </Cards>
                <Cards>
                    <SiCsharp />
                </Cards>
                <Cards>
                    <SiNodedotjs />
                </Cards>
                <Cards>
                    <SiMicrosoftsqlserver />
                </Cards>
                <Cards>
                    <SiGit />
                </Cards>
                <Cards>
                    <SiGithub />
                </Cards>
                <Cards>
                    <SiVisualstudiocode />
                </Cards>
            </Container>
        </>
    )
}