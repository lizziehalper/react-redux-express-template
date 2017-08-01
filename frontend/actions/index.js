// Action Creators

// import * as types from './types';
const login = (user, token) => {
  return {
    type: 'LOGIN',
    user: user,
    token: token
  };
};

export default login;
