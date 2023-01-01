import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Countries from './components/pages/Countries'
import SingleCountry from './components/pages/SingleCountry'

function AppRouter() {
  return (
    <Routes>
        
        <Route path="/" element={<Countries/>} />
        <Route path="/:code" element={<SingleCountry/>} />
    </Routes>
  )
}

export default AppRouter