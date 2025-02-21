import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import './crudStyle.css'
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from './EmployeeStore';
import Table from 'react-bootstrap/Table';

const EmployeeList = () => {
  
        const navigate = useNavigate();
       const {employee} = useContext(EmployeeContext);

  return (
    <>

        <div className='addEmployeeBtn'>
            <Button variant="success" onClick={()=> navigate('/addEmployee')}>Add Employee</Button>
        </div>
        
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>City</th>
          <th>State</th>
          <th>Pin Code</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      {employee.map((emp, index) =>(
        <tr key={emp.id}>
          <td> {emp.id}</td>
          <td> {emp.firstName}</td>
          <td> {emp.lastName}</td>
          <td> {emp.city} </td>
          <td> {emp.state} </td>
          <td> {emp.zip} </td>
        <td>
        <Button variant="primary" size="sm" onClick={()=>navigate(`/editEmployee/${emp.id}`)}>
          Edit
        </Button>
         <Button variant="secondary" size="sm" > 
          Delete
         </Button>
        </td>
       

        </tr>
    ))}
        
      </tbody>
    </Table>

    </>
  )
}

export default EmployeeList