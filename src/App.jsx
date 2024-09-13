import Register from './components/Register'
import Home from './Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import NotFound from './components/NotFound'
import TransactionList from './components/TransactionList'
import UserProvider from './contexts/UserProvider'
import SideNav from './components/SideNav'

function App() {

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/transaction" element={<TransactionList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
