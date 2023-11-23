import styled from "styled-components";


export const Backg = styled.section`
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 100%; 
    height: 100vh; 
    background-color: #000000;
    justify-content: center;
    align-items: center;
    display :flex ;
    flex-direction : column;
    
    @media (min-width: 768px) { 
    padding-top: 6rem;
    padding-bottom: 6rem; 
    }
    @media (min-width: 1024px) { 
    padding-top: 8rem;
    padding-bottom: 8rem; 
    }
    @media (min-width: 1280px) { 
    padding-top: 12rem;
    padding-bottom: 12rem; 
    }

`


export const Big404 = styled.div`
    font-size: 300px;
    color: white;
    font-weight: bold;
`

export const Smallcoment = styled.div`
    
    font-size: 30px;
    color: white;
`