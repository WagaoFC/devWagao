import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 90%;
    height: 90vh;
    margin: auto;
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
    text-align: center;

    h1, h2, h3 {
        color: ${props => props.theme.title === 'light' ? 'var(--text-color-dark)' : 'var(--text-color-light)'};
    }

    a {
        text-decoration: none;
        color: var(--text-color-focus);
    }

    @media (max-width: 1024px) {
        text-align: left;
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
            margin: 0;
        }
    }
`