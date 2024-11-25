import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/rb_2147949245.png'
import ProjectCard from '../components/ProjectCard'
import { Button, Card } from 'react-bootstrap'


const Home = () => {
  return (
    <>
      <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 style={{fontSize:'80px'}}><i class="fa-brands fa-product-hunt me-2"></i>
                Project Fair</h1>
                <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects.
                   As well as access all projects available in our website... What are you waiting for!!!
                </p>
                <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
              </div>
              <div className="col-lg-6">
                <img className='img-fluid' src={landingImg} alt="" />
              </div>
            </div>
          </div>
      </div>

      {/* Explore our projects */}
      <div className="my-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            <div className="me-5">
              <ProjectCard/>
            </div>
          </div>
        </marquee>
        <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS...</button>
      </div>

      {/* Our Testimonials */}
      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid'
                 src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png" alt="" />
                 <div className="d-flex justify-content-center my-2">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                 </div>
                <p style={{textAlign:'justify'}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid'
                 src="https://freesvg.org/img/1459344336.png" alt="" />
                 <div className="d-flex justify-content-center my-2">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                 </div>
                <p style={{textAlign:'justify'}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid'
                 src="https://cdn4.iconfinder.com/data/icons/mixed-set-1-1/128/28-512.png" alt="" />
                 <div className="d-flex justify-content-center my-2">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                 </div>
                <p style={{textAlign:'justify'}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
     
    </>
  )
}

export default Home