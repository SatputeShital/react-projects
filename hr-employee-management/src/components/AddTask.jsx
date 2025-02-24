import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Form, Button, Container, Card } from "react-bootstrap";

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState({ title: "", description: "", status: "Pending" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description) {
      addTask(task);
      setTask({ title: "", description: "", status: "Pending" });
    }
  };

  return (
    <Container>
      <Card className="p-4">
        <h2 className="text-center">➕ Add Task</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter task title" value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter task description" value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Form.Select>
          </Form.Group>
          <Button variant="success" type="submit" className="mt-3">Add Task</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddTask;
