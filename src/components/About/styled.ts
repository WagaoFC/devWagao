import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    z-index: 1;
    
    img {
        width: 20%;
        border-radius: 40px 0 40px 0;
        box-shadow: 5px 5px 33px 5px var(--text-color-focus);
        transition: transform 1s;

        &:hover {
            transform: scale(1.2);
        }
    }
`

export const Text = styled.div`
    width: 45%;
    text-align: center;
    justify-content: center;
    align-items: center;

    .Align {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    svg {
        margin: 0;
        color: var(--text-color-focus);
        font-size: 25px;
    }
`