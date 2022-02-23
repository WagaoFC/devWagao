import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgb(1,31,63);
    background: linear-gradient(207deg, rgba(1,31,63,1) 0%, rgba(66,159,253,0.8323704481792717) 100%);

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: var(--text-color-light);

        &:hover {
            cursor: pointer;
            color: var(--text-color-focus);
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        a {
            text-decoration: none;
            color: var(--text-color-light);

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
    }
`