import React, { useState } from "react";
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
    const [loginId, setLoginId] = useState("");
    const [loginPwd, setLoginPwd] = useState("");

    const onChangeId = (e) => {
        setLoginId(e.target.value);
        console.log(e.target.value);
    }

    const onChangePwd = (e) => {
        setLoginPwd(e.target.value);
        console.log(e.target.value);
    }

    const onClickLogin = () => {
        console.log("로그인 버튼이 클릭되었습니다.")
        console.log(`아이디 : ${loginId}`);
        console.log(`비밀번호 : ${loginPwd}`);
    }

    return(
        <LoginContainer>
            <p>여기는 로그인 페이지 입니다.</p>
            <div><input type="text" placeholder="아이디를 입력하세요" onChange={onChangeId}/></div>
            <div><input type="password" placeholder="비밀번호를 입력하세요" onChange={onChangePwd}/></div>
            <div><button onClick={onClickLogin}>로그인</button></div>
            <button onClick={()=>nav("/")}>Home</button>
        </LoginContainer>
    )
}
export default Login;