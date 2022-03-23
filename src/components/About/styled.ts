import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 1;
    gap: 10rem;
    
    img {
        width: 20%;
        border-radius: 0px 40px 0px 40px;
        box-shadow: 5px 5px 33px 5px var(--text-color-focus);
        transition: transform 1s;

        &:hover {
            transform: scale(1.2);
        }
    }
`

export const Text = styled.div`
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
`