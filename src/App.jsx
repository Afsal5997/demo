
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Reg from './Reg'

function App() {


  return (
    <Routes>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/' element={<Reg/>}/>
      <Route  path='/dash' element={<Reg/>}/>
      
    </Routes>
  )
}

export default App
