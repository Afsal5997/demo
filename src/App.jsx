
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Reg from './Reg'
import Dashboard from './Dashboard'

function App() {


  return (
    <Routes>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/' element={<Reg/>}/>
      <Route  path='/dash' element={<Dashboard/>}/>
      
    </Routes>
  )
}

export default App
