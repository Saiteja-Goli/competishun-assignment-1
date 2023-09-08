import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Favourites from './Favourites'
import Home from './Home'
import Watchlist from './Watchlist'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
