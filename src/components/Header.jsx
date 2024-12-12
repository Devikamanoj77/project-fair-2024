import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useNavigate } from 'react-router-dom';
import { tokenContext } from '../contexts/TokenAuth';


const Header = ({insideDashboard}) => {
  const {authorisedUser,setAuthorisedUser}= useContext(tokenContext)
  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
  }
  return (
  <Navbar style={{zIndex:1}} className="bg-transparent shadow rounded position-fixed w-100">
    <Container>
      <Navbar.Brand >
      <Link to={'/'} className='text-decoration-none fw-bolder'><i class="fa-brands fa-product-hunt me-1"></i>
      Project Fair</Link>
      </Navbar.Brand>
      {
        insideDashboard && 
        <button onClick={logout} className='btn btn-link text-decoration-none'>Logout
         <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
      }
    </Container>
  </Navbar>
  )
}

export default Header