import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    padding: .5rem;
    border: none;
    border-radius: 40%;
    color: var(--background-light);
    background: var(--background-dark);

    &:hover {
        color: var(--text-color-focus);
    }
`