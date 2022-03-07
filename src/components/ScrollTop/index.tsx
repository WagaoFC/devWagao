import { Container } from './styled'
import { HiArrowCircleUp } from 'react-icons/hi'

export function ScrollTop() {
    return (
        <Container>
            <a href="#top">
                <HiArrowCircleUp size={40} />
            </a>
        </Container>
    )
}