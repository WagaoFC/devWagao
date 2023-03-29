import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 500px;

    label {
        display: flex;
        flex-direction: column;
        width: 100%;

        input {
            border-radius: 5px;
            border: solid 2px ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            padding: 0.625rem;
            background-color: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};
            color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            
            ::placeholder {
                ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            }

            :focus {
                outline: 0;
            }
        }

        textarea {
            max-width: 500px;
            border-radius: 5px;
            border: solid 2px ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            padding: 0.625rem;
            background-color: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};
            color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            
            ::placeholder {
                ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            }

            :focus {
                outline: 0;
            }
        }
    }

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
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.2);
        transition: color 0.1s, background-color 0.3s;
        margin-top: 1rem;
        
        &:hover {
            background-color: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};
            color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            border: solid 2px ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
        }
            
        svg {
            margin: 0;
        }
    }
`