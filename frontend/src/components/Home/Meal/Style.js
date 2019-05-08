import styled from 'styled-components';
import oc from 'open-color';

export const AllCard = styled.div`
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
`;

export const Menu = styled.div`
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`;

export const MenuLast = styled.div`
    margin-bottem: 1em;
`;


