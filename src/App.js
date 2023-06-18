import React from 'react'
import './App.css'

import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'

import Header from './component/Header/Header'
import NavBar from './component/NavBar/NavBar'



import HomePage from './Pages/HomePage/HomePage'
import DetailPage from './Pages/DetailPage/DetailPage'
import Category from './Pages/Category/Category'


const App = () => {
  return (
    <Router>
    <div className='App'>
      <Header/>
      <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/detail/:id' element={<DetailPage/>}/>
      <Route path='/category/:categoryId' element={<Category/>}/>
    </Routes>
    </div>
    </Router>
  )
}

export default App