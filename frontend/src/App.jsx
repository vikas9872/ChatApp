import './App.css'
import Login from './Compoents/Login'
import Signup from './Compoents/Signup'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
