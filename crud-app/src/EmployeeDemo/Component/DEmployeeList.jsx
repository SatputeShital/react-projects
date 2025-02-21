// src/components/EmployeeList.jsx
import React from "react";
import { useEmployeeContext } from "../Context/DEmployeeContext";
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';
// import '../Component/AllEmployee.css'


const EmployeeList = () => {
  const { employees } = useEmployeeContext();
  // const navigate = useNavigate();

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <table className="border-collapse border border-gray-400 w-full text-left">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">ID</th>
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400 p-2">Email</th>
              <th className="border border-gray-400 p-2">Position</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="border border-gray-400 p-2">{employee.id}</td>
                <td className="border border-gray-400 p-2">{employee.name}</td>
                <td className="border border-gray-400 p-2">{employee.email}</td>
                <td className="border border-gray-400 p-2">{employee.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

          {/* <div className='addEmployeeBtn'>
      <Button variant="success" onClick={()=> navigate('/addEmployee')} >Add New Employee</Button>
      </div>
      <br />
      <div className='editEmployeeBtn'>
      <Button variant="success" onClick={()=> navigate('/editEmployee')} >Edit Employee</Button>
      </div> */}
      
    </div>
  );
};

export default EmployeeList;
