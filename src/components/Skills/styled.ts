import styled from 'styled-components'

export const Container = styled.div`
    body{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;
    }
    
    .container{
        width: 1200px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: 15px;
        margin: 0 auto;
    }
    
    .card{
        position: relative;
        width: 350px;
        height: 400px;
        margin: 0 auto;
        background: #fff;
        box-shadow: 0 15px 60px rgba(0,0,0, .5);
        border-radius: 15px;
    }
    
    .card .face{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .card .face.face1{
        box-sizing: border-box;
        padding: 20px;
    }
    
    .card .face.face1 h2{
        margin: 0;
        padding: 0;
    }
    
    .card .face.face1 .content{
        font-size:1.2em;
        margin:0;
        padding:0 0 1em 0;
        font-weight:500;
    }
    
    .card .face.face2{
        background: #111;
        transition: 0.5s;
    }
    
    .card:nth-child(1) .face.face2{
        background: linear-gradient(45deg, var(--text-color-light), var(--background-dark));
        border-radius: 15px;
    }
    
    .card:nth-child(2) .face.face2{
        background: linear-gradient(45deg, var(--text-color-light), var(--background-dark));
        border-radius: 15px;
    }
    
    .card:nth-child(3) .face.face2{
        background: linear-gradient(45deg, var(--text-color-light), var(--background-dark));
        border-radius: 15px;
    }
    
    .card:hover .face.face2{
        height: 60px;
        border-radius: 0 0 15px 15px;
    }
    
    .card .face.face2:before{
        content:'';
        position: absolute;
        top:0;
        left:0;
        width: 50%;
        height: 100%;
        background: rgba(255,255,255, 0.1);
        border-radius: 15px 0 0 15px;
    }
    
    .card .face.face2 h2{
        margin: 0;
        padding: 0;
        font-size: 10em;
        color: #fff;
        transition: 0.5s;
        text-shadow: 0 2px 5px rgba(0,0,0, .2);
    }
    
    .card:hover .face.face2 h2{
        font-size: 2em;
    }
`