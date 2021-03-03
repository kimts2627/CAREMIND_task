import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../components/UserInfo';
import { changeUserInfo } from '../modules/login';

const UserInfoContainer = () => {

  const userInfo = useSelector((state) => state.login.userInfo);

  const dispatch = useDispatch();

  const changingUserInfo = (userInfo) => {
    dispatch(changeUserInfo(userInfo));
  }

  return(
    <UserInfo userInfo={userInfo} changeUserInfo={changingUserInfo} />
  );
}

export default UserInfoContainer;
