/* Action types */
const login = (user, token) => {
  return {
    type: 'LOGIN',
    user: user,
    token: token
  };
};

const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

const addBook = () => {
  return {
    type: 'ADD_BOOK'
  };
};

export default {
  login: login,
  logout: logout,
  addBook: addBook,
};
