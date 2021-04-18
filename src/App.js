import React from 'react';
import {Navbar} from 'react-bootstrap'
import Login from './components/Login';
import avenger from './avengers.jfif';

function App() {
  return (
    <>
    <div styles={{ backgroundImage:`url(${avenger})`}} >
  
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>{' '}
      Shop by Characters 
    </Navbar.Brand>
  </Navbar>
    
    </div>
    <Login />
    </>
  );
}

export default App;