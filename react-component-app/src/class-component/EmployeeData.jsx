import React, { Component, Fragment } from 'react';

class EmployeeData extends Component {
  constructor(props) {
    super(props);
    this.emp = {
      id: 1,
      name: "John",
      age: 30,
      salary: 20000,
    };
  }

  render() {
    const { cname, cAddress } = this.props; // Destructure props
    const{did, dname}=this.props;
    return (
      <Fragment>
        <div
          id="emp"
        >
          <h1>Employee Data</h1>
          <hr></hr>
          <p>
            <b>Company Name:</b> {cname}
          </p>
          <p>
            <b>Company Address:</b> {cAddress}
          </p>
          <p>
            <b>Department Id:</b> {did}
          </p>
          <p>
            <b>Department Name:</b> {dname}
          </p>
          <p>
            <b>Employee Id:</b> {this.emp.id}
          </p>
          <p>
            <b>Employee Name:</b> {this.emp.name}
          </p>
          <p>
            <b>Employee Age:</b> {this.emp.age}
          </p>
          <p>
            <b>Employee Salary:</b> {this.emp.salary}
          </p>
        </div>
      </Fragment>
    );
  }
}

export default EmployeeData;
