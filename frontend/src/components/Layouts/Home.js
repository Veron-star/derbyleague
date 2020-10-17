import React from 'react';
import { Button } from 'muicss/react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Swipe from "../Swiper/Swiper";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Derby League WA</h1>
        <div>
          <Swipe />
          <Link to='/signup'><Button className="home-button" variant="raised" color="primary">New User?</Button></Link>
          <Link to='/signin'><Button className="home-button" variant="raised" color="danger">Log in</Button></Link>
        </div>
      </div>
    )
  }
}

export default Home;