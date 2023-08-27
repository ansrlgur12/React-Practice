import React, { useContext } from "react";
import { styled } from "styled-components";
import { UserContext } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 15vh;
background-color: #ccc;
margin-bottom: 15vh;
padding: 0 2vw;
`;

const HeaderTitle = styled.div`
    color: royalblue;
    font-size: 3em;
`
const ColBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const LoginInfo = styled.div`
    display: flex;
    flex-direction: column;

`
const LogOutBtn = styled.button`
    
`

const Header = () => {

    const context = useContext(UserContext);
    const {userId, setUserId, setPassword} = context;
    const nav = useNavigate();

    const onClickLogOut = () => {
        setUserId("");
        setPassword("");
        nav("/");
    }

    return(
        <HeaderContainer>
            <HeaderTitle>React Practice</HeaderTitle>
            <ColBox>
                <LoginInfo>현재 아이디 : {userId ? userId : "???"}</LoginInfo>
                {userId &&
                    <LogOutBtn onClick={onClickLogOut}>로그아웃</LogOutBtn>
                }
                
            </ColBox>
            
        </HeaderContainer>
    )
};

export default Header;