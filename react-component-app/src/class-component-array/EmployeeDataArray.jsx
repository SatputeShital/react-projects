import React, { Component, Fragment } from "react";

class EmployeeDataArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, name: "John", age: 30, salary: 20000 },
        { id: 2, name: "Jane", age: 28, salary: 22000 },
        { id: 3, name: "Smith", age: 35, salary: 25000 },
      ],
    };
  }

  render() {
    const { cname, cAddress} = this.props;
    const { employees } = this.state;

    return (
      <Fragment>
        <div
          id="emp"
          style={{
            
            height: "auto",
            border: "2px solid black",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h1>Employee Data</h1>
          <p>
            <b>Company Name:</b> {cname}
          </p>
          <p>
            <b>Company Address:</b> {cAddress}
          </p>
          
          <h2>Employees</h2>
          {employees.map((emp) => (
            <div key={emp.id}>
               <hr />
              <p>
                <b>Employee Id:</b> {emp.id}
              </p>
              <p>
                <b>Employee Name:</b> {emp.name}
              </p>
              <p>
                <b>Employee Age:</b> {emp.age}
              </p>
              <p>
                <b>Employee Salary:</b> {emp.salary}
              </p>
             
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default EmployeeDataArray;
