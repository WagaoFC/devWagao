import styled from 'styled-components'

export const Container = styled.div`
    display: none;

    @media (max-width: 900px) {
        display: flex;
    }

    a {
        position: fixed;
        bottom: 20px;
        right: 20px;

        svg {
            color: ${props => props.theme.title === 'light' ? 'var(--text-color-dark)' : 'var(--text-color-light)'};
            opacity: 0.4;

            &:hover {
                opacity: 1;
                color: var(--text-color-focus);
            }
        }
    }
`