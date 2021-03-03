import React, { useEffect } from 'react';
import '../style.css';
import LoginContainer from '../containers/LoginContainer';
import UserInfoContainer from '../containers/UserInfoContainer';

const App = ({ isLogin, userInfo, handleLogin }) => {

  useEffect(() => {
    if(localStorage.getItem('JWT_KEY') && !isLogin) {
      handleLogin();
    }
    else if(!localStorage.getItem('JWT_KEY') && isLogin) {
      handleLogin();
    }
  }, [userInfo])

  return (
    <div className="App">
      {!isLogin ? <LoginContainer /> : <UserInfoContainer />}
    </div>
  );
}

export default App;
