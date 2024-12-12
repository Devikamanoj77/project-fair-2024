import React,{useEffect, useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';
import uploadingImg from '../assets/rb_60111.png'
import SERVER_BASE_URL from '../services/serverURL';
import { updateUserAPI } from '../services/allAPI';


const Profile = () => {
  const [open, setOpen] = useState(false);
  const [preview,setPreview] = useState("")
  const [existingProfilePic,setExistingProfilePic] = useState("")
  // profilepic key of userDetails
  const [userDetails,setUserDetails] = useState({
    username:"",email:"",password:"",github:"",linkedin:"",proflePic:""
  })
  console.log(userDetails);
  
  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({
      ...userDetails,username:user.username,email:user.email,password:user.password,github:user.github,
      linkedin:user.linkedin
    })
    setExistingProfilePic(user.proflePic)
  },[open])

  useEffect(()=>{
    if(userDetails.proflePic){
      setPreview(URL.createObjectURL(userDetails.proflePic))
    }else{
      setPreview("")

    }
  },[userDetails.proflePic])

  const handleUserUpdate = async()=>{
    const {username,email,password,github,linkedin,proflePic} = userDetails
    if(github&&linkedin){
      const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview?reqBody.append("proflePic",proflePic):reqBody.append("proflePic",existingProfilePic)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }
        // api call
        try{
          const result = await updateUserAPI(reqBody,reqHeader)
          if(result.status==200){
            alert("User profile Updated")
            sessionStorage.setItem("user",JSON.stringify(result.data))
            // collapse profile
            setOpen(!open)
          }
        }catch(err){
          console.log(err); 
        }
      }
    }else{
      alert("Fill completely")
    }
  }

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
            {
              existingProfilePic==""?
              <img width={'200px'} height={'200px'} className='rounded-circle ' src={preview?preview:uploadingImg} alt="" />
              :
              <img width={'200px'} height={'200px'} className='rounded-circle ' src={preview?preview:`${SERVER_BASE_URL}/uploads/${existingProfilePic}`} alt="" />
            }
          </label>
          <div className="mb-2 w-100">
            <input value={userDetails.github} onChange={e=>setUserDetails({...userDetails,github:e.target.value})} type="text" className='form-control' placeholder='User GITHUB link'/>
          </div>
          <div className="mb-2 w-100">
            <input value={userDetails.linkedin} onChange={e=>setUserDetails({...userDetails,linkedin:e.target.value})} type="text" className='form-control' placeholder='User LINKEDIN link'/>
          </div>
          <div className="d-grid w-100">
            <button onClick={handleUserUpdate} className='btn btn-warning'>Update</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile