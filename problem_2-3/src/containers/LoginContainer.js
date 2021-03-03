import React from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import Login from '../components/Login';
import { handleIdInput, handlePwInput, changeUserInfo } from '../modules/login';


const LoginContainer = () => {

  const currentIdInput = useSelector((state) => state.login.currentIdInput);
  const currentPwInput = useSelector((state) => state.login.currentPwInput);

  const dispatch = useDispatch();

  const handlingIdInput = (id) => {
    dispatch(handleIdInput(id));
  }

  const handlingPwInput = (password) => {
    dispatch(handlePwInput(password));
  }

  const changingUserInfo = (userInfo) => {
    dispatch(changeUserInfo(userInfo));
  }

  return(
    <Login
      handleIdInput={handlingIdInput}
      handlePwInput={handlingPwInput}
      changeUserInfo={changingUserInfo}
      currentIdInput={currentIdInput}
      currentPwInput={currentPwInput}
    />
  );
}

export default LoginContainer;
