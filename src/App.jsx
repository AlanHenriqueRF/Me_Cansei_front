import { BrowserRouter, Routes ,Route } from "react-router-dom"
import React from "react"
import SingInPage from "./pages/SignIn"
import SingUpPage from "./pages/SignUp"
import Home from "./pages/home"
import Shoespage from "./pages/shoes"
import User from "./pages/user"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingInPage/>}/> 
        <Route path='/SignUp' element={<SingUpPage/>}/>
        <Route path='/home' element={<Home/>}/> 
        <Route path='/home/:id' element={<Shoespage/>}/> 
        <Route path='/user' element={<User/>}/> 
       </Routes>
    </BrowserRouter>
  )
}

export default App

