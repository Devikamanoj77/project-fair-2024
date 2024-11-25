import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = ({insideDashboard}) => {
  return (
  <Navbar style={{zIndex:1}} className="bg-transparent shadow rounded position-fixed w-100">
    <Container>
      <Navbar.Brand >
      <Link to={'/'} className='text-decoration-none fw-bolder'><i class="fa-brands fa-product-hunt me-1"></i>
      Project Fair</Link>
      </Navbar.Brand>
      {
        insideDashboard && 
        <button className='btn btn-link text-decoration-none'>Logout
         <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
      }
    </Container>
  </Navbar>
  )
}

export default Header