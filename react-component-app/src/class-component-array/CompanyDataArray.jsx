import React, { Component, Fragment } from "react";
import DepartmentDataArray from "./DepartmentDataArray";
import './style.css';
import EmployeeDataArray from "./EmployeeDataArray";

class CompanyDataArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        name: "Dk Company",
        address: "Mumbai",
      },
      departments: [
        { id: 1, name: "Production" },
        { id: 2, name: "Marketing" },
        { id: 3, name: "Finance" },
      ],
    };
  }

  render() {
    const { company, departments } = this.state;

    return (
      <Fragment>
        <div
          id="comp"
          style={{
            
            height: "auto",
            border: "2px solid black",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <h1>Company Data</h1>
          <p>
            <b>Company Name:</b> {company.name}
          </p>
          <p>
            <b>Company Address:</b> {company.address}
          </p>
          {/* Passing array of departments to DepartmentData */}
          {departments.map((dept) => (
            <DepartmentDataArray
              key={dept.id}
              cname={company.name}
              cAddress={company.address}
              dept={dept}
            />
          ))}
           {/* Passing department-specific data to EmployeeData */}
                    <EmployeeDataArray
                    cname={company.name}
                    cAddress={company.address}
                    />
        </div>
      </Fragment>
    );
  }
}

export default CompanyDataArray;
