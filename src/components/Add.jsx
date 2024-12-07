import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadProjectImg from '../assets/pro-Image-removebg-preview.png'

const Add = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='btn btn-primary'>+ New Project</button>
      <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <label >
                  <input type="file" style={{display:'none'}} />
                  <img className='img-fluid' height={'200px'} src={uploadProjectImg} alt="" />
                </label>
                <div className="text-warning fw-bolder">Upload Only the following types (jpeg, jpg, png) here!!!</div>
              </div>
              <div className="col-lg-8">
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='Project Title'/>
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='Project Languages'/>
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='Project Overview'/>
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='Project github Link'/>
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder='Project website link'/>
                </div>
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add