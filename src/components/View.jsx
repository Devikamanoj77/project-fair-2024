import React, { useState,useEffect, useContext } from 'react'
import Add from './Add'
import Edit from './Edit'
import { deleteProjectAPI, userProjectAPI } from '../services/allAPI'
import { addProjectContext, editProjectContext } from '../contexts/ContextShare'
const View = () => {
  const {editProjectResponse,setEditProjectResponse} =useContext(editProjectContext)
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectContext)
  // to display user projects
  // create state to store user project
  const [userProjects,setUserProjects] = useState([])
  console.log(userProjects);

  // call function using useEffect
  useEffect(()=>{
    getUserProject()
  },[addProjectResponse,editProjectResponse])
  
  // create a function for getting all user project and call api inside that function store all user projects inside the state
  const getUserProject = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization" : `Bearer ${token}`

      }
      try{
        const result = await userProjectAPI(reqHeader)
        console.log(result);
        if(result.status==200){
          setUserProjects(result.data)

        }  
      }catch(err){
        console.log(err);  
      }
    } 
  }

  const removeProject = async(id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      try{
        const result = await deleteProjectAPI(id,reqHeader)
        if(result.status==200){
          getUserProject()
        }
      }catch(err){
        console.log(err);
        
      }
    }
  }
  
  
  return (
    <>
    <div className='d-flex justify-content-between mt-3'>
      <h2 className='text-warning'>All Projects</h2>
      <Add/>
    </div>
    <div className="mt-3">
      {
        userProjects.length>0?
        userProjects?.map(project=>(
          <div className="border rounded p-2 d-flex justify-content-between mb-3">
          <h3>{project?.title}</h3>
          <div className="d-flex align-items-center">
            <div><Edit project={project}/></div>
            <button className='btn'><a href={project?.github}
             target='_blank'><i className="fa-brands fa-github"></i></a></button>
            <button onClick={()=>removeProject(project?._id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          </div>
        </div>
        ))
        :
        <div>Not uploaded any projects yett!!!</div>
      }
    </div>
    </>
   
    
  )
}

export default View