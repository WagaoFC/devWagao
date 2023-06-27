import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    
    img {
        width: 20%;
        border-radius: 40px 0 40px 0;
        box-shadow: 3px 3px var(--text-color-focus);
        transition: transform 1s;

        &:hover {
            transform: scale(1.2);
        }
    }

    .img1 {
        @media (max-width: 700px) {
            display: none;
        }
    }

    .img2 {
        display: none;
        border-radius: 50%;

        @media (max-width: 700px) {
            display: block;
        }
    }

    @media (max-width: 700px) {
        flex-direction: column;
    }
`

export const Text = styled.div`
    width: 45%;
    text-align: center;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: var(--text-color-focus);
    }

    span {
        display: flex;
        text-align: justify;
        margin-bottom: 1rem;
    }

    @media (max-width: 700px) {
        width: 400px;
        display: flex;
        flex-direction: column;
    }
`