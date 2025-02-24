import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const EditTask = () => {
  const { tasks, updateTask } = useContext(TaskContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const existingTask = tasks.find(task => task.id === parseInt(id));

  const [task, setTask] = useState(existingTask || { title: "", description: "", status: "Pending" });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(parseInt(id), task);
    navigate("/");
  };

  return (
    <Container>
      <Card className="p-4">
        <h2 className="text-center">✏️ Edit Task</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={task.description}
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
          <Button variant="primary" type="submit" className="mt-3">Update Task</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default EditTask;
