
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
import './App.css'
import { useContext } from 'react'
import { tokenContext } from './contexts/TokenAuth'


function App() 

{
  const {authorisedUser,setAuthorisedUser} = useContext(tokenContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        {
          authorisedUser &&
          <>
             <Route path='/dashboard' element={<Dashboard/>}/>
             <Route path='/projects' element={<Projects/>}/>
          </>
        }
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
