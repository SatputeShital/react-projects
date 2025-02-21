import React , { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from './EmployeeContext';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const EditEmployee = () => {
  const {id} = useParams()

    const[Name, setName]=useState('');
    const[Age, setAge]=useState('');
    const[City, setCity]=useState('');
    const[MbNumber, setMbNumber]=useState('');
    const[Department, setDepartment]=useState('');
    const[JoinDate, setJoinDate]=useState('');

    const {updateEmployee, employee}= useContext(EmployeeContext)

     useEffect(()=>{
            const emp =employee.find(emp=> emp.id === parseInt(id))
            if(emp){
              setName(emp.Name);
              setAge(emp.Age);
              setCity(emp.City);
              setMbNumber(emp.MbNumber);
              setDepartment(emp.Department);
              setJoinDate(emp.JoinDate);
            }
      }, [id, employee])

      const navigate = useNavigate()

      const handleSubmit = (event) => {
   
        console.log('Inside handle Submit')
       
        
        const emp = {id:Date.now(), Name, Age, City ,MbNumber, Department,JoinDate};
        console.log("emp object in emp method-"+emp)
        updateEmployee(parseInt(id),emp);
      
        navigate('/');
         event.preventDefault();
       
      };
    
  return (
    <div>
      <h1>Edit Employee</h1>
      <div className='newform'>
      <Form onSubmit={handleSubmit}> 
       {/* <Form> */}
      
       <label htmlFor="">
      <b> Name:</b>
       </label>
      <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" style={{width:"500px"}} />
      <br />
      <label htmlFor="">
      <b> Age:</b>
       </label>
      <input type="Number" value={Age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" style={{width:"500px"}} />
      <br />
      <label htmlFor="">
      <b> City:</b>
       </label>
      <input type="text" value={City} onChange={(e)=>setCity(e.target.value)} placeholder="Enter City" style={{width:"500px"}} />
      <br />
      <label htmlFor="">
      <b> Mobile Number:</b>
       </label>
      <input type="number"value={MbNumber} onChange={(e)=>setMbNumber(e.target.value)} placeholder="Enter Mobile Number" style={{width:"500px"}} />
      <br />
      <label htmlFor="">
      <b> Department:</b>
       </label>
      <input type="text"  value={Department} onChange={(e)=>setDepartment(e.target.value)} placeholder="Enter Depatment" style={{width:"500px"}} />
      <br />
      <label htmlFor="">
      <b> Joining date:</b>
       </label>
      <input type="date" value={JoinDate} onChange={(e)=>setJoinDate(e.target.value)} placeholder="Enter Joining Date" style={{width:"500px"}} />
      <br />
      
      <button>Submit</button>
    </Form> 
      </div>
    </div>
  )
}

export default EditEmployee
