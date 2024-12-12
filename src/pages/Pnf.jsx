import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      <h1 style={{fontSize:'80px'}}>404</h1>
      <img className='img-fluid' src="" alt="" />
      <h1>You Are Lost</h1>
      <h2>This page is not available</h2>
      <Link to={'/'} className='btn btn-warning'>Go to Home</Link>
    </div>
  )
}

export default Pnf