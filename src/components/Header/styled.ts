import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    background: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};
`

export const HeaderMenu = styled.header`
    max-width: 1200px;
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    background: ${props => props.theme.title === 'light' ? 'var(--background-light)' : 'var(--background-dark)'};

    a {
        text-decoration: none;
        color: ${props => props.theme.title === 'light' ? 'var(--text-color-dark)' : 'var(--text-color-light)'};
        font-weight: 600;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    a {
        &:after {
          content: "";
          display: block;
          margin: 0 auto;
          width: 0;
          height: 2px;
          background-color: var(--text-color-focus);
          -webkit-transition: opacity .3s ease,width .3s ease;
          -moz-transition: opacity .3s ease,width .3s ease;
          -o-transition: opacity .3s ease,width .3s ease;
          transition: opacity .3s ease,width .3s ease;
          -ms-transition: opacity .3s ease,width .3s ease;
        }

        &:hover {
            color: var(--text-color-focus);
            &:after {
                width: 100%;
            }
        }
    }

    svg {
        display: none;

        @media (max-width: 900px) {
            display: flex;
        }
    }

    svg:hover {
        cursor: pointer;
        color: var(--text-color-focus);
    }
`