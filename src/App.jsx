import Register from './components/Register'
import Home from './Home/Home'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import'./App.css'
import Login from './components/Login'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App
