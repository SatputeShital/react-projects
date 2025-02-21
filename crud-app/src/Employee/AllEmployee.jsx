

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './AllEmployee.css'
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';


const AllEmployee = () => {

        const navigate = useNavigate();


        const { employee, deleteEmployee } = useContext(EmployeeContext); // Get delete function
  return (
    <div className='allemployee'>
       
      <h1>All Employee</h1>

      <div className='addEmployeeBtn'>
      <Button variant="success" onClick={()=> navigate('/addEmployee')} >Add New Employee</Button>
      </div>
      <br />
       {/* <div className='editEmployeeBtn'>
      <Button variant="success" onClick={()=> navigate('/editEmployee')} >Edit Employee</Button>
      </div>  */}
      

      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Employee Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Mobile Number</th>
          <th>Joining Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

      {employee.map((emp, index) =>(
        <tr key={emp.id}>
          <td> {emp.id}</td>
          <td> {emp.Name}</td>
          <td> {emp.Age}</td>
          <td> {emp.city} </td>
          <td> {emp.MbNumber} </td>
          <td> {emp.Department} </td>
        <td>
        <Button variant="primary" size="sm" onClick={()=>navigate(`/editEmployee/${emp.id}`)}>
          Edit
        </Button>&nbsp;
         <Button variant="danger" size="sm" onClick={() => deleteEmployee(emp.id)}  > {/*Call delete function */} 
          Delete
         </Button>
        </td>
       

        </tr>
    ))}
        
      </tbody>
    </Table>
    </div>
  )
}

export default AllEmployee
