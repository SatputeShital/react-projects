import React, { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Table, Button, Container, Card } from "react-bootstrap";

const EmployeeList = () => {
  const { employees, deleteEmployee } = useContext(EmployeeContext);

  return (
    <div>
        <h2>Hello</h2>
         <Container>
    <Card className="p-4">
      <h2 className="text-center">👥 Employee List</h2>
      <Table striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>
                <Button variant="info" size="sm">Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => deleteEmployee(emp.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  </Container></div>
   
  );
};

export default EmployeeList;
