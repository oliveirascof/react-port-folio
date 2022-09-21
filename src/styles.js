import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #dcdcdc;
    height: "100%";
    width: "100%";
    justify-content: center;
    align-items: flex-start;


`

export const Button = styled.button`
    background-color: #ffa500; &:hover {
        background-color: green;
        color: white;
    }  
    border-width: 1px;
    padding: 5px;
    margin: 10px;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    max-width: 100px;
    max-height: 100px;
    border: 10px;
    cursor: pointer;  
`

export const Title = styled.h1`
    padding: 10px; 
    &:hover {
        font-size: 40px;
    }
    

`

export const SectionBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
`

export const Card = styled.a`
    text-align: center;
    color: inherit;
    border-radius: 10px;
    transform: color 0.50s ease, border-color 0.50s ease;
    border: none;
    cursor: pointer;

`