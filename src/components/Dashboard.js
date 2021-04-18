import React from 'react'
import { Card, Button} from 'react-bootstrap'
const Dashboard = (props) => {
    const { profileObj } = props.response;
    const handleLogout = event => {
        props.onchange('');
    }
    return (
      <div>
      <a href="hero.html">Superhero Section</a><br></br>
      <a href="#">TV Drama</a><br></br>
      <a href="#">MovieStar</a><br></br>
      </div>
  );
}

export default Dashboard
