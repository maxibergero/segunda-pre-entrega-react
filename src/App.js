import React from 'react'
import './App.css'

import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'

import Header from './component/Header/Header'
import NavBar from './component/NavBar/NavBar'


import AboutPage from './Pages/AboutPage/AboutPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import HomePage from './Pages/HomePage/HomePage'
import DetailPage from './Pages/DetailPage/DetailPage'


const App = () => {
  return (
    <Router>
    <div className='App'>
      <Header/>
      <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/detail/:id' element={<DetailPage/>}/>
    </Routes>
    </div>
    </Router>
  )
}

export default App