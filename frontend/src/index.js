import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


// const store=createStore( rootReducer , composeWithDevTools(applyMiddleware(thunk)));

// if (localStorage.bookwormJWT) 
// {   const payload = decode(localStorage.bookwormJWT);
//     const user = {token: localStorage.bookwormJWT,  email: payload.email, confirmed: payload.confirmed};
//     console.log('src/index.js-send to store- user = token: localStorage.bookwormJWT=',user);
//     setAuthorizationHeader(localStorage.bookwormJWT);
//     store.dispatch(userLoggedIn(user));
// }

// Render
ReactDOM.render(
    
       <BrowserRouter>
         
             <App />
         
       </BrowserRouter>
   ,
    document.getElementById('root')
 );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
