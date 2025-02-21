import React, { createContext, useState } from 'react'

export const EmployeeContext = createContext()

const EmployeeStore = ({children}) => {

    const[employee, setEmployee] = useState([]);

    const addEmployee=(employeeVal)=>{
        console.log('Inside Add Employee function'+employeeVal);
        setEmployee([...employee, employeeVal])
    }

    const updateEmployee=(id, updatedEmployee)=>{
      setEmployee(
        employee.map((emp)=> emp.id===id ? updatedEmployee : emp)
      )
    }

    

  return (
        <EmployeeContext.Provider value={{employee, addEmployee, updateEmployee}}>
          {children}
        </EmployeeContext.Provider>
  )
}

export default EmployeeStore