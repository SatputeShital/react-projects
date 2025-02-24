import React from "react";
import { EmployeeProvider } from "./context/EmployeeContext";
import { TaskProvider } from "./context/TaskContext";
import Employees from "./pages/Employees";
import Tasks from "./pages/Tasks";
import { Container } from "react-bootstrap";

function App() {
  return (
    <EmployeeProvider>
      <TaskProvider>
        <Container>
          <Employees />
          <Tasks />
        </Container>
      </TaskProvider>
    </EmployeeProvider>
  );
}

export default App;
