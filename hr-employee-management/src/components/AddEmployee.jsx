import React, { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Form, Button, Container, Card } from "react-bootstrap";

const AddEmployee = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({ name: "", department: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.department && employee.email) {
      addEmployee(employee);
      setEmployee({ name: "", department: "", email: "" });
    }
  };

  return (
    <Container>
      <Card className="p-4">
        <h2 className="text-center">➕ Add Employee</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={employee.name}
              onChange={(e) => setEmployee({ ...employee, name: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Department</Form.Label>
            <Form.Control type="text" placeholder="Enter department" value={employee.department}
              onChange={(e) => setEmployee({ ...employee, department: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={employee.email}
              onChange={(e) => setEmployee({ ...employee, email: e.target.value })} required />
          </Form.Group>
          <Button variant="success" type="submit" className="mt-3">Add Employee</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddEmployee;
