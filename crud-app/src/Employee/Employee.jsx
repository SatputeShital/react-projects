import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllEmployee from './AllEmployee'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'

const Employee = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AllEmployee/>}/>
        <Route exact path='/addEmployee' element={<AddEmployee/>}></Route>
        <Route exact path='/editEmployee' element={<EditEmployee/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Employee
