
import  React,{createContext, useState} from 'react';


export const EmployeeContext=createContext();

 export const EmployeeContextProvider=({children})=>
{
    const[employee, setEmployee] = useState([]);

    const addEmployee=(employeeVal)=>{
        console.log('Inside Add Employee function'+employeeVal);
        setEmployee([...employee, employeeVal])
    };
       
    const updateEmployee=(id, updatedEmployee)=>{
        setEmployee(
          employee.map((emp)=> emp.id===id ? updatedEmployee : emp)
        )
      };


       // ✅ Delete employee function
  const deleteEmployee = (id) => {
    setEmployee(employee.filter(emp => emp.id !== id)); // Remove only the selected employee
  };

   

    
    return(
        <EmployeeContext.Provider value={{employee, addEmployee, updateEmployee, deleteEmployee}}>
            {children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;
