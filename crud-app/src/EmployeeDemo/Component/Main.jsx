import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import AllEmployee from './AllEmployee'
// import AddEmployee from './AddEmployee'
// import EditEmployee from './EditEmployee'

import EmployeeList from './DEmployeeList'
import AddEmployeeForm from './AddEmployeeForm'

const Main = () => {
  return (
    <div>
           <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EmployeeList/>}/>
        <Route exact path='/addEmployee' element={<AddEmployeeForm/>}></Route>
        {/* <Route exact path='/editEmployee' element={<EditEmployee/>}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main
