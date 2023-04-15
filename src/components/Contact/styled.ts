import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 500px;

    label {
        display: flex;
        flex-direction: column;
        width: 100%;

        span {
            font-size: 0.81rem;
            color: red;
        }

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
    
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .loader {
        border-style: solid;
        box-sizing: border-box;
        border-width: 40px 60px 30px 60px;
        border-color: #3760C9 #96DDFC #96DDFC #36BBF7;
        animation: envFloating 1s ease-in infinite alternate;
    }

    .loader:after{
        content:"";
        position: absolute;
        right: 62px;
        top: -40px;
        height: 70px;
        width: 50px;
        background-image:
                    linear-gradient(#fff 45px, transparent 0),
                    linear-gradient(#fff 45px, transparent 0),
                    linear-gradient(#fff 45px, transparent 0);
        background-repeat: no-repeat;
        background-size: 30px 4px;
        background-position: 0px 11px , 8px 35px, 0px 60px;
        animation: envDropping 0.75s linear infinite;
    }

    @keyframes envFloating {
        0% { transform: translate(-2px, -5px)}
        100% { transform: translate(0, 5px)}
    }

    @keyframes envDropping {
        0% {background-position: 100px 11px , 115px 35px, 105px 60px; opacity: 1;}
        50% {background-position: 0px 11px , 20px 35px, 5px 60px; }
        60% {background-position: -30px 11px , 0px 35px, -10px 60px; }
        75%, 100% {background-position: -30px 11px , -30px 35px, -30px 60px; opacity: 0;}
    }
`