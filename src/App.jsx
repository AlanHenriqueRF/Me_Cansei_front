import { BrowserRouter, Routes ,Route } from "react-router-dom"
import React from "react"
import SingInPage from "./pages/SignIn"
import SingUpPage from "./pages/SignUp"
import Home from "./pages/home"
import Shoespage from "./pages/shoes"
import User from "./pages/user"
import Newshoepage from "./pages/newshoepage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingInPage/>}/> 
        <Route path='/SignUp' element={<SingUpPage/>}/>
        <Route path='/shoe' element={<Home/>}/> 
        <Route path='/shoe/:id' element={<Shoespage/>}/> 
        <Route path='/shoe/new' element={<Newshoepage/>}/> 
        <Route path='/user' element={<User/>}/> 
       </Routes>
    </BrowserRouter>
  )
}

export default App

