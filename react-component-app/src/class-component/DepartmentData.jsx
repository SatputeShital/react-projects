import React, { Component, Fragment } from 'react';
import './style.css'
import EmployeeData from './EmployeeData';

class DepartmentData extends Component {
  constructor(props) {
    super(props);
    this.dept = {
      id: 2,
      name: "Production",
    };
  }

  render() {
    const { cname, cAddress } = this.props; // Destructure props from parent
    return (
      <Fragment>
        <div
          id="dept"
        >
          <h1>Department Data</h1>
          <hr></hr>
          <p>
            <b>Company Name:</b> {cname}
          </p>
          <p>
            <b>Company Address:</b> {cAddress}
          </p>
          <p>
            <b>Department Id:</b> {this.dept.id}
          </p>
          <p>
            <b>Department Name:</b> {this.dept.name}
          </p>
          {/* Pass department and company data to EmployeeData */}
          <EmployeeData
           cname={cname} cAddress= {cAddress} 
          did= {this.dept.id} dname={ this.dept.name } />
          
          
        </div>
      </Fragment>
    );
  }
}

export default DepartmentData;
