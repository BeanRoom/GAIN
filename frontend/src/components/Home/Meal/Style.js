import styled from 'styled-components';
import oc from 'open-color';

export const Content = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;
`;

export const Foot = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;
`;

export const Header = styled.h1`
    width: 100%;
    margin-left: 1rem;
    font-weight: 900;
    font-size: 1.618rem;
    text-transform: uppercase;
    letter-spacing: 0.1ch;
    line-height: 1;
    padding-bottom: 0.5em;
    margin-bottom: 1rem;
    position: relative;
`;

export const Description = styled.p`
    width: 100%;
    margin-top: 0;
    margin-left: 1rem;
    margin-bottom: 3rem;
`;

export const HCard = styled.a`
    color: inherit;
    cursor: pointer;
    width: calc(33% - 2rem);
    min-width: calc(33% - 2rem);
    height: 400px;
    min-height: 400px;
    perspective: 1000px;
    margin: 1rem;
    position: relative;
`;

