import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AllMenu from './pages/AllMenu'
import Breakfast from './pages/Breakfast'
import Shakes from './pages/Shakes'
import Lunch from './pages/Lunch'
import useFetch from './hooks/useFetch'
function App() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element = {<AllMenu/>}></Route>
          <Route path='/breakfast' element = {<Breakfast/>}></Route>
          <Route path='/lunch' element = {<Lunch/>}></Route>
          <Route path='/shakes' element = {<Shakes/>}></Route>
        </Routes>
      </Router>
  )
}

export default App
