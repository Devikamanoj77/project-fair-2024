import React,{useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';
import uploadingImg from '../assets/rb_60111.png'


const Profile = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <div className="div d-flex justify-content-evenly">
        <h3 className="text-warning">Profile</h3>
        <button onClick={()=>setOpen(!open)} className='btn text-warning' ><i className="fa-solid fa-chevron-down"></i></button>
      </div>
      <Collapse in={open}>
        <div className='row container-fluid alihn-items-center justify-content-center shadow 
        p-2 rounded' id="example-collapse-text">
          {/* upload pic */}
          <label  className="text-center">
            <input style={{display:'none'}} type="file" />
            <img width={'200px'} height={'200px'} className='rounded-circle ' src={uploadingImg} alt="" />
          </label>
          <div className="mb-2 w-100">
            <input type="text" className='form-control' placeholder='User GITHUB link'/>
          </div>
          <div className="mb-2 w-100">
            <input type="text" className='form-control' placeholder='User LINKEDIN link'/>
          </div>
          <div className="d-grid w-100">
            <button className='btn btn-warning'>Update</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile