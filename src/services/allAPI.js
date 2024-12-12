import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverURL";

// registerAPI
export const registerAPI = async (reqBody)=>{
  return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

// login
export const loginAPI = async(reqBody)=>{
  return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

// add-project 
export const addProjectAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVER_BASE_URL}/add-projects`,reqBody,reqHeader)
}

// home-project 
export const homeProjectAPI = async()=>{
  return await commonAPI("GET",`${SERVER_BASE_URL}/home-projects`,{})
}

// user-project 
export const userProjectAPI = async(reqHeader)=>{
  return await commonAPI("GET",`${SERVER_BASE_URL}/user-projects`,{},reqHeader)
}

// all-project 
export const allProjectAPI = async(reqHeader,searchKey)=>{
  return await commonAPI("GET",`${SERVER_BASE_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}

// projects/:id/edit
export const updateProjectAPI = async (id,reBody,reqHeader)=>{
  return await commonAPI("PUT",`${SERVER_BASE_URL}/projects/${id}/edit`,reBody,reqHeader)
}

// /projects/:id/remove

export const deleteProjectAPI = async(id,reqHeader)=>{
  return await commonAPI("DELETE",`${SERVER_BASE_URL}/projects/${id}/remove`,{},reqHeader)
}

export const updateUserAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${SERVER_BASE_URL}/user/edit`,reqBody,reqHeader)
}