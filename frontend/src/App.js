import React from 'react';
// import { signOut } from './api/auth';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "../src/components/Layouts/Header";
import './App.css';
// Layouts
// import Home from './components/Layouts/Home';
// import Sidebar from './components/Layouts/Sidebar';
// import Header from './components/Layouts/Header';
// // import NotFound from './components/Layouts/NotFound';
// import Swiper from './components/Swiper/Swiper';
// // Components
// import SignInForm from './components/Auth/SignInForm';
// import SignUpForm from './components/Auth/SignUpForm';
// import Account from './components/Account/Account';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/img.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
    </div>
  );
}



// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { currentUser: null }
//   }

//   onUserSignedIn = (user) => {
//     this.setState({ currentUser: user })
//   }

//   onSignOut = () => {
//     this.setState({ currentUser: null })
//     signOut();
//   }

//   render() {
//     const isLoggedIn = !!this.state.currentUser;
//     let logInControl = null;
//     if (isLoggedIn) {
//       logInControl = <li onClick={this.onSignOut}><strong>Log Out</strong></li>;
//     } else {
//       logInControl = <Link to='/signin'><li><strong>Log In</strong></li></Link>;
//     };

//     return (
//       <BrowserRouter>
//         <div className="App">
//           <Header />
//           <Sidebar logInControl={logInControl} isLoggedIn={isLoggedIn}/>

//           <div id="content-wrapper">
//             <div className="mui--appbar-height"></div>
//             <div className="mui-container-fluid">

//               <Switch>
//               <Route exact path="/" component={Swiper} />
//                 <Route exact path="/home" component={Home} />
//                 <Route path="/signup" render={() => <SignUpForm onUserSignedIn={this.onUserSignedIn} />} />
//                 <Route path="/signin" render={() => <SignInForm onUserSignedIn={this.onUserSignedIn} />} />
//                 <Route path="/account" render={() => <Account currentUser={this.state.currentUser} onUserSignedIn={this.onUserSignedIn}/>} />
//               </Switch>

//             </div>
//           </div>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;