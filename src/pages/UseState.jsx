import React from "react";
import { useState } from "react";
import { TitleStyle, ButtonStyle } from "./Login";
import { styled } from "styled-components";
import Header from "./Header";

const UseStateStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const UseState = () => {
    
    const [value, setValue] = useState(0);

    return(
        <>
        <Header />
        <UseStateStyle>
        <TitleStyle>useState 복습 페이지</TitleStyle>
        현재 value 값 = {value}
        <div className="buttonArea">
            <ButtonStyle onClick={()=>setValue(value + 1)}>+</ButtonStyle>
            <ButtonStyle onClick={()=>setValue(value - 1)}>-</ButtonStyle>
        </div>
        </UseStateStyle>
        </>
    )
};

export default UseState;