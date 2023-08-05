import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SignUpContainer = styled.div`
    p{
        font-size: 1.2em;
        color: orangered;
    }
`;

const SignUp = () => {

    const nav = useNavigate();

    return(
        <SignUpContainer>
        <p>회원가입 페이지 입니다.</p>
        <button onClick={()=>nav("/Login")}>돌아가기</button>
        </SignUpContainer>
    )
}

export default SignUp;