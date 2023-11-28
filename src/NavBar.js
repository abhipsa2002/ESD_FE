
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { useAuth } from './AuthContext';
import { Navbar } from 'react-bootstrap';

import {Nav, Button } from 'react-bootstrap';

const Navigation = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = () => {

    // Redirect to the login page
    logout();
    history.push('/');


  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Welcome to IIITB</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Add Course
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      <Button variant="outline-danger" onClick={handleLogout} className="ml-auto">
            Logout
          </Button>
          
    </nav>
  );
};

export default Navigation;



/*const Navigation = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = () => {

    // Redirect to the login page
    logout();
    history.push('/');


  };

  return (
    <Navbar bg="lightblue" expand="lg" variant="light">
      <Navbar.Brand href="#" style={{ fontSize: '1.5rem' }}>Welcome to IIITB</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
          <Button variant="outline-danger" onClick={handleLogout}>
            Logout
          </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;*/

