import styled from "styled-components";


export const Backg = styled.section`
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 100%; 
    height: 100vh; 
    background-color: #000000; 

    
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

export const Container = styled.div`
    padding-left: 1rem;
    padding-right: 1rem; 
vertical-align: middle;

    @media (min-width: 768px) { 
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
 }

`

export const Grid = styled.div`
    display: grid;
    gap: 1.5rem; 
    align-items: center; 
    margin: 0 auto;
    width: 45%;
    
`

export const Flx = styled.div`
    
    display: flex; 
    margin-top: 1rem; 
    flex-direction: column; 
    justify-content: center; 
    text-align: center; 
    align-items: center;
`

export const Spac = styled.div`
    margin-top: 0.5rem; 
`

export const Bigtitle = styled.h1`
    color: white;
    font-size: 2rem;
    line-height: 2.25rem; 
    font-weight: 700; 
    letter-spacing: -0.05em; 

    @media (min-width: 640px) { 
    font-size: 3rem;
    line-height: 1; 
    }


    @media (min-width: 1280px) { 
    }
`


export const Smalltitle = styled.p`
    max-width: 800px;

    padding: 10px;
    @media (min-width: 768px) { 
    font-size: 1.25rem;
    line-height: 1.75rem; 
    }

`

export const Formdiv = styled.div`
    margin-top: 0.5rem; 
    width: 100%; 
    max-width: 24rem; 
    margin: 20px;

`

export const Form = styled.form`
    display: flex; 
    margin-left: 0.5rem; 
    
`

export const Input = styled.input`
    flex: 1 1 0%; 
    border-color: #111827; 
    max-width: 32rem; 
    color: #ffffff; 
    background-color: #1F2937; 
    padding: 5px;
    border-radius: 10px;
    margin-right: 10px;
    padding-left: 10px;
`

export const Button = styled.button`
    color: #000000; 
    background-color: #ffffff; 
    text-align: center;
    padding: 10px;
    border-radius: 10px;
`

export const Text1 = styled.p`
    font-size: 0.75rem;
    line-height: 1rem; 
    padding: 30px;
`

export const Text2 = styled.a`
    color: #ffffff; 
    text-decoration: underline; 
    text-underline-offset: 2px; 
`