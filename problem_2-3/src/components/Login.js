import React from 'react';
import avatar from '../img/avatar.png';

const Login = ({
  currentIdInput,
  currentPwInput,
  handleIdInput,
  handlePwInput,
  changeUserInfo
}) => {

  const handleChange = (e) => {
    if(e.target.name === 'id') {
      handleIdInput(e.target.value);
    }
    else if(e.target.name === 'password') {
      handlePwInput(e.target.value);
    }
  }

  const handleClick = () => {
    if(!currentIdInput || !currentPwInput) {
      return alert('아이디, 비밀번호를 정확히 입력하세요');
    }

    localStorage.setItem('JWT_KEY', 'this is a fake token');

    let userInfo = {
      id: currentIdInput,
      avatar: avatar
    }
    changeUserInfo(userInfo);

    // 실제로는 fetch.post 등을 이용하여, 서버에서 인증 절차를 거친 후
    // 토큰과 유저 정보를 가져와 사용한다.
    // 서버가 없음에 따라 가짜 토큰과 가짜 유저 정보를 임의로 만들어 주었다.
  }

  return(
    <section className='login-box'>
      <input name='id' type='text' placeholder='username' onChange={(e) => handleChange(e)}/>
      <input name='password' type='password' placeholder='password' onChange={(e) => handleChange(e)}/>
      <button onClick={handleClick}>Login</button>
    </section>
  );
}

export default Login;
