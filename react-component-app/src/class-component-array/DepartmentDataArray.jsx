import React, { Component, Fragment } from "react";
// import EmployeeDataArray from "./EmployeeDataArray";

class DepartmentDataArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [
        { id: 1, name: "Production" },
        { id: 2, name: "Marketing" },
        { id: 3, name: "Finance" },
      ],
    };
  }
  render() {
    const { cname, cAddress} = this.props;
   const {departments}=this.state;
    return (
      <Fragment>
        <div
          id="dept"
          style={{
            
            height: "auto",
            border: "2px solid black",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h1>Department Data</h1>
          <p>
            <b>Company Name:</b> {cname}
          </p>
          <p>
            <b>Company Address:</b> {cAddress}
          </p>
         { departments.map((dept) => (
            <div key={dept.id}>
               <hr />
          <p>
            <b>Department Id:</b> {dept.id}
          </p>
          <p>
            <b>Department Name:</b> {dept.name}
          </p>
         
          </div>
          ))}

          
         
        </div>
      </Fragment>
    );
  }
}

export default DepartmentDataArray;
