import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.h1`
    font-family: 'Helvetica';
    color: #00FF00;
`

const ButtonStyled = styled.button`
    width: calc(50% - 16px);
    border: 2px solid pink;
    color: red;
    font-weight: bold;
    background-color: lightblue;
`

const ButtonContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`



const MyComponent = () => {

    const [number, setNumber] = useState(0);

    const [otherNumber, setOtherNumber] = useState(0);

    useEffect(() => {
        console.log("Component rendered");
    }, [number, otherNumber]);

    return (
        <div>
            <HeaderStyled>Hello</HeaderStyled>
            <ButtonContainerStyled>
                <ButtonStyled onClick={()=>{setNumber(number+2)}}>Whatever For Now</ButtonStyled>
                <ButtonStyled onClick={()=>{setOtherNumber(otherNumber-2)}}>Other Number</ButtonStyled>
            </ButtonContainerStyled>

            <h2>{number}</h2>
            <h2>{otherNumber}</h2>

        </div>
    );
};

export default MyComponent;