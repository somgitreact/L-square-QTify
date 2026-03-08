import React from 'react'

import Details from '../screen/Details'
import Home from '../screen/Home'
import { Routes, Route } from "react-router-dom";

const Navigation = ({objectAll}) => {
  return (
     <Routes>
      <Route path="/" element={<Home data={objectAll}/>} />
      <Route path="/details" element={<Details />} />
    </Routes>
  )
}

export default Navigation