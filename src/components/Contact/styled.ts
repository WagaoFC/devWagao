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

        p {
            font-size: 0.81rem;
            text-align: right;
            margin-top: 2px;
        }

        input {
            border-radius: 5px;
            border: solid 2px ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            padding: 0.625rem;
            background-color: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};
            color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            
            ::placeholder {
                color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            }

            :focus {
                outline: 0;
            }
        }

        textarea {
            max-width: 500px;
            min-height: 100px;
            border-radius: 5px;
            border: solid 2px ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            padding: 0.625rem;
            background-color: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};
            color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            
            ::placeholder {
                color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
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
        
        &:hover {
            background-color: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};
            color: ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
            border: solid 2px ${props => props.theme.title === 'light' ? 'var(--background-dark)' : 'var(--background-light)'};
        }
            
        svg {
            margin: 0;
        }

        div {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1rem;
        }
    }

    .loader {
        color: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};
        font-size: 1rem;
        text-indent: -9999em;
        overflow: hidden;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        position: relative;
        transform: translateZ(0);
        animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
    }

    @keyframes mltShdSpin {
        0% {
            box-shadow: 0 -0.83em 0 -0.4em,
            0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
            0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        5%,
        95% {
            box-shadow: 0 -0.83em 0 -0.4em, 
            0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
            0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
        10%,
        59% {
            box-shadow: 0 -0.83em 0 -0.4em, 
            -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
            -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
        }
        20% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
            -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
            -0.749em -0.34em 0 -0.477em;
        }
        38% {
            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
            -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
            -0.82em -0.09em 0 -0.477em;
        }
        100% {
            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
            0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
        }
    }

    @keyframes round {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg) }
    }
`