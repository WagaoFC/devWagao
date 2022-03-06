import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 90%;
    height: 90vh;
    margin: auto;

    @media (max-width: 1024px) {
        gap: 1rem;
    }

    @media (max-width: 500px) {
        width: 600px;
        margin-left: 0.5rem;
    }
`

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto auto auto 0;    

    a {
        text-decoration: none;
        color: ${props => props.theme.title === 'light' ? 'var(--text-color-dark)' : 'var(--text-color-light)'};

        &:hover {
            color: var(--text-color-focus);
        }
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;

    h1, h2, h3 {
        color: ${props => props.theme.title === 'light' ? 'var(--text-color-dark)' : 'var(--text-color-light)'};
    }

    a {
        text-decoration: none;
        color: var(--text-color-focus);
    }
`

export const MotionLottie = styled.div`
    width: 44%;

    @media (max-width: 1024px) {
        display: none;
    }
`

export const Section = styled.section`
    section {
        color: ${props => props.theme.title === 'light' ? 'var(--text-color-dark)' : 'var(--text-color-light)'};
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5rem;
    }

    svg {
        margin: 0 0 0 5rem;

        @media (max-width: 700px) {
            display: none;
        }
    }

    @media (max-width: 700px) {
        display: flex;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 65vh;
    }

    footer {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }
`