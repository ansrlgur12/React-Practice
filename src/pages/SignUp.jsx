import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SignUpContainer = styled.div`
    p{
        font-size: 1.2em;
        color: orangered;
    }
    .hint {
      display: flex;
      margin-top: 5px;
      margin-bottom: 10px;
      margin-right: 40px;
      align-items:center;
      font-size: 12px;
      color: #999;
    }
    .success {
        color: royalblue;
    }
    .error {
        color: red;
    }
`;

const SignUp = () => {

    const nav = useNavigate();

    // 키보드 입력
    const [signUpId, setSignUpId] = useState("");
    const [signUpPwd, setSignUpPwd] = useState("");
    const [signUpConPw, setSignUpConPw] = useState("");

    // 오류 메시지
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");
    const [conPwMessage, setConPwMessage] = useState("");

    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false)
    const [isConPw, setIsConPw] = useState(false);



    const onChangeId = (e) => {
        setSignUpId(e.target.value);
        console.log(e.target.value);
        if (e.target.value.length < 5 || e.target.value.length > 12) {
            setIdMessage("5자리 이상 12자리 미만으로 입력해 주세요.");
            setIsId(false);    
        } else {
            setIdMessage("올바른 유형의 아이디 입니다.");
            setIsId(true);
        }

    }

    const onChangePwd = (e) => {
        console.log(e.target.value);
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value ;
        setSignUpPwd(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자 조합으로 8자리 이상 입력해주세요')
            setIsPw(false)
        } else {
            setPwMessage('올바른 유형의 비밀번호 입니다.')
            setIsPw(true);
        }        
    }

    const onChangeConPw = (e) => {
        const passwordCurrent = e.target.value ;
        setSignUpConPw(passwordCurrent)
        if (passwordCurrent !== signUpPwd) {
            setConPwMessage('비밀 번호가 일치하지 않습니다.')
            setIsConPw(false)
        } else {
            setConPwMessage('비밀 번호가 일치 합니다. )')
            setIsConPw(true);
        }      
    }

    return(
        <SignUpContainer>
        <p>회원가입 페이지 입니다.</p>
        <div><input type="text" placeholder="아이디를 입력하세요" onChange={onChangeId} value={signUpId}/></div>
        <div className="hint">
            {signUpId.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
        </div>
        <div><input type="password" placeholder="비밀번호를 입력하세요" onChange={onChangePwd} value={signUpPwd}/></div>
        <div className="hint">
            {signUpPwd.length > 0 && (
                    <span className={`${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
        </div>
        <div><input type="password" placeholder="비밀번호를 확인하세요" onChange={onChangeConPw} value={signUpConPw}/></div>
        <div className="hint">
            {signUpConPw.length > 0 && (
                    <span className={`${isConPw ? 'success' : 'error'}`}>{conPwMessage}</span>)}
        </div>
        <button onClick={()=>nav("/Login")}>회원가입</button>
        <button onClick={()=>nav("/Login")}>돌아가기</button>
        </SignUpContainer>
    )
}

export default SignUp;