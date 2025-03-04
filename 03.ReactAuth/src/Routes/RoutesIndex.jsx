import { Route, Routes } from "react-router-dom"
import {Home,Dashboard,Login,Secret,SingUp} from '@/Pages'

const RoutesIndex = () => {
  return (
    <>
    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/login'element={<Login/>}/>
            <Route path='/secret'element={<Secret/>}/>
            <Route path='/signup'element={<SingUp/>}/>


        </Routes>

   
    </>
  )
}

export default RoutesIndex