import Register from './components/Register'
import Home from './Home/Home'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import'./App.css'
import Login from './components/Login'
import NotFound from './components/NotFound'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App
