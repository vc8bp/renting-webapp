import { useSelector } from 'react-redux'
import { Outlet, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import AddProduct from './page/AddProduct'



const IsLogedIn = () => {
  const user = useSelector(s => s.user.user?.token);
  return user ? <Navigate to="/" /> : <Outlet/>
}

function App() {
  return (
    <>
      <Routes>
        <Route element={<IsLogedIn/>} >
          <Route path='/register'  element={<RegisterPage/>} />
          <Route path='/login'  element={<LoginPage/>} />
        </Route>
        <Route path='/add'  element={<AddProduct/>} />
        <Route path='/'  element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
