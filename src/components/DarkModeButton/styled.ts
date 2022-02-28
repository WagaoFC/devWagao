import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    padding: .5rem;
    border: none;
    border-radius: 40%;
    background: none;
    color: ${props => props.theme.title === 'light' ? 'var(--text-color-dark)' : 'var(--text-color-light)'};

    &:hover {
        color: var(--text-color-focus);
    }
`