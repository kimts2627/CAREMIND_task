// Actions
const HANDLE_LOGIN = 'login/HANDLE_LOGIN';
const HANDLE_ID_INPUT = 'login/HANDLE_ID_INPUT';
const HANDLE_PW_INPUT = 'login/HANDLE_PW_INPUT';
const CHANGE_USERINFO = 'login/CHANGE_USERINFO';

// ActionFunc
export const handleLogin = () => ({ type: HANDLE_LOGIN });
export const handleIdInput = (id) => ({ type: HANDLE_ID_INPUT, payload: { id } });
export const handlePwInput = (password) => ({ type: HANDLE_PW_INPUT, payload: { password } });
export const changeUserInfo = (userInfo) => ({ type: CHANGE_USERINFO, payload: { userInfo } });

// InitialState
const initialState = {
  isLogin: false,
  currentIdInput: '',
  currentPwInput: '',
  userInfo: {
    id: null,
    avatar: null
  }
}

// Reducer
const login = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_LOGIN:
      return Object.assign({}, state, { isLogin: !state.isLogin })
    case HANDLE_ID_INPUT:
      return Object.assign({}, state, { currentIdInput: action.payload.id })
    case HANDLE_PW_INPUT:
      return Object.assign({}, state, { currentPwInput: action.payload.password })
    case CHANGE_USERINFO:
      return Object.assign({}, state, { userInfo: action.payload.userInfo })
    default:
      return state;
  }
}

export default login;
