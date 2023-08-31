import React, { useState } from "react";
import { styled } from "styled-components";

const HappyDrawContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`;

const Circle = styled.div`
   width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(${({ rotationAngle }) => rotationAngle}deg, #3498db 50%, #e74c3c 50%);
  margin: 1px;

  animation: dropAndRotateAnimation ${({ rotationDuration }) => rotationDuration}s ease-in-out;
  
  @keyframes dropAndRotateAnimation {
    from {
      transform: translateY(-500%) rotate(0deg);
      opacity: 0;
    }
    to {
      transform: translateY(0) rotate(${({ rotationAngle }) => rotationAngle}deg);
      opacity: 1;
    }
  }
`;

const CirclesBox = styled.div`
  display: flex;
  flex-flow: wrap-reverse;
  justify-content: center;
  align-content: flex-start;
  height: 50vh;
  width: 30vw;
  border: 1px solid black;
`;

const HappyDraw = () => {

    const [numOfCircle, setNumOfCircle] = useState(0);

    const plusBox = () => {
        setNumOfCircle(numOfCircle + 1);
    }
    
    const generateRandomRotation = () => {
        return Math.random() * 360;
    }

    return(
        <HappyDrawContainer>
            <h1>현재 공 갯수 : {numOfCircle}</h1>
            <button onClick={plusBox}>추가</button>
            <CirclesBox>
                {Array.from({ length: numOfCircle }).map((_, index) => (
                <Circle key={index} rotationAngle={generateRandomRotation()} rotationDuration={0.5} />
                ))}
            </CirclesBox>
        </HappyDrawContainer>
    )
}

export default HappyDraw;
