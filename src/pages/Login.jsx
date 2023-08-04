import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
    p{
        color: royalblue;
        font-size: 1.5em;
    }
`;

const Login = () => {
    const nav = useNavigate();
    return(
        <LoginContainer>
            <p>여기는 로그인 페이지 입니다.</p>
            <button onClick={()=>nav("/")}>Home</button>
        </LoginContainer>
    )
}
export default Login;