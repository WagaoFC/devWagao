import Lottie from 'react-lottie'
import animation from './animation.json'
import { Container } from './styled'

export function Main() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
    }

    return (
        <Container>
            <Lottie
                options={defaultOptions}
                height={600}
                width={600}
            />
        </Container>
    )
}