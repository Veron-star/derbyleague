import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../components/types";
import api from '../components/api';
//import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = user => ({  type: USER_LOGGED_IN, user  });
export const userLoggedOut = () => ({   type: USER_LOGGED_OUT   });

//thunk actions
export const login = credentials => dispatch =>api.user.login(credentials).then(user => 
 {    localStorage.bookwormJWT = user.token;   
      // setAuthorizationHeader(user.token);     
       dispatch(userLoggedIn(user));    
 });

export const logout = () => dispatch => 
{  localStorage.removeItem("bookwormJWT");  
  // setAuthorizationHeader();
   dispatch(userLoggedOut());   
};

export const confirm = token => dispatch =>
  api.user.confirm(token).then(user => { localStorage.bookwormJWT = user.token;  dispatch(userLoggedIn(user)); });
      
export const resetPasswordRequest = ({ email }) => () =>  api.user.resetPasswordRequest(email);
//we dont need to pass anything to store so no dispatch so directly api called

export const validateToken = token => () => api.user.validateToken(token);

export const resetPassword = data => () => api.user.resetPassword(data);