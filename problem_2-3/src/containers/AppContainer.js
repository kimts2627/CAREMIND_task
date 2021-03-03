import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '../modules/login';
import App from '../components/App';

const AppContainer = () => {

  const isLogin = useSelector((state) => state.login.isLogin);
  const userInfo = useSelector((state) => state.login.userInfo);

  const dispatch = useDispatch();

  const handlingLogin = () => {
    dispatch(handleLogin());
  }

  return(
    <App isLogin={isLogin} userInfo={userInfo} handleLogin={handlingLogin}/>
  );
}

export default AppContainer;
