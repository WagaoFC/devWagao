import styled from 'styled-components'

export const Container = styled.header`
    max-width: 1500px;
    margin: auto;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: var(--text-color-dark);
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

    svg:hover {
        cursor: pointer;
    }
`