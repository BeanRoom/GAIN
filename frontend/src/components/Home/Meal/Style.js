import styled from 'styled-components';
import oc from 'open-color';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;        
`

export const Header = styled.h1`
    width: 100%;
    margin-left: 1rem;
    font-weight: 900;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1ch;
    line-height: 1;
    padding-bottom: 0.5em;
    margin-bottom: 1rem;
    position: relative;
    letter-spacing: 0px;
    font-weight: blod;
    &:after {
        display: block;
        content: '';
        position: absolute;
        width: 60px;
        height: 4px;
        background: linear-gradient(135deg, #1a9be6, #1a57e6);
        bottom: 0;
    }
`

export const Description = styled.p`
    width: 100%;
    margin-top: 0;
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: blod;
`

export const Button = styled.button``


export const Front = styled.div`
    display: flex;
    border-radius: 6px;
    background-position: center;
    background-size: cover;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: ease-in-out 600ms;
    background-size: cover;
    padding: 2rem;
    font-size: 1.618rem;
    font-weight: 600;
    color: #fff;
    overflow: hidden;
    font-family: Poppins, sans-serif;

    &:before {
        position: absolute;
        display: block;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #1a9be6, #1a57e6);
        opacity: 0.25;
        z-index: -1;
    }
`

export const Back = styled.div`
    display: flex;
    border-radius: 6px;
    background-position: center;
    background-size: cover;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: ease-in-out 600ms;
    background: #fff;
    transform: rotateY(-180deg);
    padding: 0

    & ${Button} {
        background: linear-gradient(135deg, #1a9be6, #1a57e6);       
    }
    
    & ${Button}:before {
        box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
        background-color: rgba(26, 87, 230, 0.25);  
    }
`

export const Card = styled.a`
    color: inherit;
    cursor: pointer;
    width: calc(33% - 2rem);
    min-width: calc(33% - 2rem);
    height: 400px;
    min-height: 400px;
    perspective: 1000px;
    margin: 1rem;
    position: relative;
    @media screen and (max-width: 800px) {
        width: calc(50% - 2rem);
    }
    @media screen and (max-width: 500px) {
        width: 100%;
    }

    &:hover ${Front} {
        transform: rotateY(180deg);
    }
    &:nth-child(even):hover ${Front} {
        transform: rotateY(-180deg);
    }

    &:hover ${Back} {
        transform: rotateY(0deg);
    }

    &:nth-child(even) ${Back} {
        transform: rotateY(180deg);
    }

    &:nth-child(even) ${Back} ${Button} {
        background: linear-gradient(135deg, #e61a80, #e61a3c);
    }

    &:nth-child(even) ${Back} ${Button}:before {
        box-shadow: 0 0 10px 10px rgba(230, 26, 60, 0.25);
        background-color: rgba(230, 26, 60, 0.25);
    }

    &:nth-child(even):hover ${Back} {
        transform: rotateY(0deg);
    }

`

export const Meal = styled.p`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1rem;
`

// .btn:link,
// .btn:visited{
//   text-decoration: none;
//   text-transform:uppercase;
//   position:relative;
//   top:0;
//   left:0;
//   padding:20px 40px;
//   border-radius:100px;
//   display:inline-block;
//   transition: all .5s;
// }