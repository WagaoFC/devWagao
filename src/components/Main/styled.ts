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
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        justify-content: center;
        width: 400px;
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

    @media (max-width: 500px) {
        flex-direction: row;
        margin: 0;
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

    @media (max-width: 500px) {
        text-align: center;
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
        max-width: 1200px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
    }

    > svg {
        margin: 0 0 0 5rem;

        @media (max-width: 700px) {
            display: none;
        }
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;

        p {
            color: ${props => props.theme.title === 'light' ? 'var(--text-color-dark)' : 'var(--text-color-light)'};
        }

        hr {
            width: 100%;
        }
    }
`