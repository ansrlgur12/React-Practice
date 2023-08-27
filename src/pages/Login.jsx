import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { UserContext } from "../Context/ContextApi";
import { useContext } from "react";

const LoginContainer = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const TitleStyle = styled.h1`
    color: ${props => props.color || 'black'};
    font-size: 1.5em;
    margin-top: 10vh;
    margin-bottom: 10vh;
`;

export const InputStyle = styled.input`
    width: 20vw;
    height: 40px;
    border-radius: 20px;
    padding-left: 1em;
    border: 1px solid black;
`;

export const ButtonStyle = styled.button`
    width: 100px;
    height: 30px;
    margin: 1em;
    border-radius: 10px;
    border: 1px solid #ccc;
`;

const Login = () => {
    const nav = useNavigate();
    const [loginId, setLoginId] = useState("");
    const [loginPwd, setLoginPwd] = useState("");

    const context = useContext(UserContext);
    const {setUserId, setPassword} = context;


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
        setUserId(loginId);
        setPassword(loginPwd);
        console.log(`아이디 : ${loginId}`);
        console.log(`비밀번호 : ${loginPwd}`);
        nav("/");
    }

    return(
        <>
        <Header />
        <LoginContainer>
            <TitleStyle color="royalblue">여기는 로그인 페이지 입니다.</TitleStyle>
            <InputStyle type="text" placeholder="아이디를 입력하세요" onChange={onChangeId}/>
            <InputStyle type="password" placeholder="비밀번호를 입력하세요" onChange={onChangePwd}/>
            <div className="buttonList">
                <ButtonStyle onClick={onClickLogin}>Login</ButtonStyle>
                <ButtonStyle onClick={()=>nav("/SignUp")}>Sign up</ButtonStyle>
                <ButtonStyle onClick={()=>nav("/")}>Home</ButtonStyle>
            </div>
        </LoginContainer>
        </>
    )
}
export default Login;