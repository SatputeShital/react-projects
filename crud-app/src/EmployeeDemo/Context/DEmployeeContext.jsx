// src/context/EmployeeContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create Context for Employee Data
const  DEmployeeContext = createContext();

// Employee Provider to manage employee data
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // Function to add a new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <DEmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </DEmployeeContext.Provider>
  );
};

// Custom hook to use Employee Context
export const useEmployeeContext = () => {
  return useContext(DEmployeeContext);
};
