import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './AddNewEmployee.css'

const AddEmployee = () => {
    
  const[Name, setName]=useState('');

  return (
    <div>
      <h1>Add New Employee</h1>
      <div className='newform'>
      <Form>
      
       <label htmlFor="">
      <b> Name:</b>
       </label>
      <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" style={{width:"500px"}} />
      <br />
      <label htmlFor="">
      <b> Address:</b>
       </label>
      <input type="text" placeholder="Enter Address" style={{width:"500px"}} />
      <br />
      <label htmlFor="">
      <b> Mobile Number:</b>
       </label>
      <input type="number" placeholder="Enter Mobile Number" style={{width:"500px"}} />
      <br />
      <label htmlFor="">
      <b> Department:</b>
       </label>
      <input type="text" placeholder="Enter Depatment" style={{width:"500px"}} />
      <br />
      <button>Submit</button>
    </Form> 
      </div>
    </div>
  )
}

export default AddEmployee
