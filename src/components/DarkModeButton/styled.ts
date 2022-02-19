import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    padding: .5rem;
    border: none;
    border-radius: 40%;
    color: var(--background-dark);
    background: var(--background-light);

    &:hover {
        color: var(--text-color-focus);
    }
`