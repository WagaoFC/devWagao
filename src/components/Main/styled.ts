import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    height: 90vh;
    margin: auto;

    @media (max-width: 900px) {
        width: 70%;
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

    h1, h2, h3 {
        color: ${props => props.theme.title === 'light' ? 'var(--text-color-dark)' : 'var(--text-color-light)'};
    }

    a {
        text-decoration: none;
        color: var(--text-color-focus);
    }
`

export const MotionLottie = styled.div`

    @media (max-width: 900px) {
        content-visibility: hidden;
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
    }
`