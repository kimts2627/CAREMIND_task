import React, { useEffect } from 'react';

const UserInfo = ({ userInfo, changeUserInfo }) => {

  useEffect(() => {
    alert(`Welcome, ${userInfo.id}`)
  }, [])

  const handleLogout = () => {
    localStorage.clear();

    let userInfo = {
      id: null,
      avatar: null
    };
    changeUserInfo(userInfo);
    alert('성공적으로 로그아웃 되었습니다.');
  }

  return(
    <section className='login-box'>
      <img className='avata' src={userInfo.avatar} alt=''/>
      <p>{userInfo.id}</p>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
}

export default UserInfo;
