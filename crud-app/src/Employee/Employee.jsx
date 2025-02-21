
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllEmployee from './AllEmployee'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import EmployeeContextProvider from './EmployeeContext'

const Employee = () => {
  return (
    <div>
      <BrowserRouter>
      <EmployeeContextProvider>
      <Routes>
        <Route exact path="/" element={<AllEmployee/>}/>
        <Route exact path='/addEmployee' element={<AddEmployee/>}></Route>
        <Route exact path='/editEmployee/:id' element={<EditEmployee/>}></Route>
        {/* no need for delete button Routing it only done work using function which is define in context */}
      </Routes>
      </EmployeeContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default Employee
