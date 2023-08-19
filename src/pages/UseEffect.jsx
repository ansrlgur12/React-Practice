import React, {useEffect, useState} from "react";
import { styled } from "styled-components";
import { TitleStyle, InputStyle } from "./Login";

const UseEffectStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .inputArea{
        height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const UseEffect = () => {

    const [name, setName] = useState("");
    const [nickName, setNickName] = useState("");

    useEffect(()=>{
        console.log("useEffect 실행!!")
        console.log({name, nickName});
    },[name])

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    }

    return(
        <UseEffectStyle>
        <TitleStyle color="purple">useEffect 복습</TitleStyle>
        <div className="inputArea">
            <InputStyle value={name} onChange={onChangeName} placeholder="이름을 입력하세요"/>
            <InputStyle value={nickName} onChange={onChangeNickName} placeholder="닉네임을 입력하세요"/>
        </div>
        </UseEffectStyle>
    );
}

export default UseEffect;