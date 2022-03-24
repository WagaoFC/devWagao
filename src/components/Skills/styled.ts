import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 2rem;

    button {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1rem;
        padding: 0.6rem 2rem;
        border-radius: 10rem;
        border: solid 2px ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
        background-color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
        color: ${props => props.theme.title === 'light' ? 'var(--text-color-light)' : 'var(--text-color-dark)'};

        svg {
            margin: 0;
        }

        &:hover {
            background-color: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};
            color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            border: solid 2px ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
        }
    }
`