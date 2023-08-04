import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
    p{
        color: red;
        font-size: 2em;
    }
`;

const Home = () => {
    const nav = useNavigate();
    return(
        <HomeContainer>
            <p>여기는 홈 입니다.</p>
            <button onClick={()=>nav("/Login")}>Login</button>
        </HomeContainer>
    )
}

export default Home;