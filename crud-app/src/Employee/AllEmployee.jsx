import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './AllEmployee.css'

const AllEmployee = () => {

        const navigate = useNavigate();
  return (
    <div className='allemployee'>
       
      <h1>All Employee</h1>

      <div className='addEmployeeBtn'>
      <Button variant="success" onClick={()=> navigate('/addEmployee')} >Add New Employee</Button>
      </div>
      <br />
      <div className='editEmployeeBtn'>
      <Button variant="success" onClick={()=> navigate('/editEmployee')} >Edit Employee</Button>
      </div>
      
    </div>
  )
}

export default AllEmployee
