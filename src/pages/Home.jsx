import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonStyle, TitleStyle } from "./Login";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    const nav = useNavigate();
    return(
        <HomeContainer>
            <TitleStyle color="red">여기는 홈 입니다.</TitleStyle>
            <div className="buttonList">
                <ButtonStyle onClick={()=>nav("/Login")}>Login</ButtonStyle>
                <ButtonStyle onClick={()=>nav("/Signup")}>Sign up</ButtonStyle>
            </div>
        </HomeContainer>
    )
}

export default Home;