import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 2rem;
    min-width: 500px;
    
    .customTooltip {
        color: ${props => props.theme.title === 'light' ? 'var(--text-color-light)' : 'var(--text-color-dark)'};
        background-color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
    }

    @media (max-width: 500px) {
        height: 350px;
        flex-direction: column;
        overflow: scroll;
    }
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
    transition: color 0.1s, background-color 0.3s, transform 1s;

    svg {
        margin: 0;
        color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
        transition: color 0.1s, background-color 1s, transform 1s;
    }

    &:hover {
        transform: scale(1.2);

        border: solid 2px ${'var(--text-color-focus)'};

        svg {
            color: ${'var(--text-color-focus)'};
        }
    }
`