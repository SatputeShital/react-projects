import React, { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const { employees, updateEmployee } = useContext(EmployeeContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const existingEmployee = employees.find(emp => emp.id === parseInt(id));

  const [employee, setEmployee] = useState(existingEmployee || { name: "", department: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(parseInt(id), employee);
    navigate("/");
  };

  return (
    <Container>
      <Card className="p-4">
        <h2 className="text-center">✏️ Edit Employee</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={employee.name}
              onChange={(e) => setEmployee({ ...employee, name: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Department</Form.Label>
            <Form.Control type="text" value={employee.department}
              onChange={(e) => setEmployee({ ...employee, department: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={employee.email}
              onChange={(e) => setEmployee({ ...employee, email: e.target.value })} required />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">Update Employee</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default EditEmployee;
