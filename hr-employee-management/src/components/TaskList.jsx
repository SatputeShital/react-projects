import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { Table, Button, Badge, ProgressBar, Card, Container, Form } from "react-bootstrap";

const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);
  const [filterStatus, setFilterStatus] = useState("");

  const filteredTasks = tasks.filter(task =>
    filterStatus === "" || task.status === filterStatus
  );

  return (
    <Container>
      <Card className="p-4">
        <h2 className="text-center">📋 Task Management</h2>
        <Form.Select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">Filter by Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Form.Select>
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>
                  <Badge bg={task.status === "Completed" ? "success" : "warning"}>
                    {task.status}
                  </Badge>
                </td>
                <td>
                  <ProgressBar now={task.status === "Completed" ? 100 : 50} label={`${task.status === "Completed" ? 100 : 50}%`} />
                </td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>❌ Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default TaskList;
