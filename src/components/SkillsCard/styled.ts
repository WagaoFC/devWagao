import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 2rem;
`

export const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 122px;
    height: 130px;
    border-radius: 5px;
    margin-top: 2rem;
    border: solid 2px ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
    background-color: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};
    color: ${props => props.theme.title === 'light' ? 'var(--text-color-light)' : 'var(--text-color-dark)'};
    font-size: 80px;
    transition: color 0.1s, background-color 0.3s;

    svg {
        margin: 0;
        color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
    }
`