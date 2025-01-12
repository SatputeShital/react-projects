import React, { Component, Fragment } from 'react';
// import EmployeeData from './EmployeeData';
import DepartmentData from './DepartmentData';

class CompanyData extends Component {
  constructor(props) {
    super(props);
    this.comp = {
      name: "Dk Company",
      address: "Mumbai",
    };
  }

  render() {
    return (
      <Fragment>
        <div id="comp" >
          <h1>Company Data</h1>
          <hr></hr>
          <p>
            <b>Company Name:</b> {this.comp.name}
          </p>
          <p>
            <b>Company Address:</b> {this.comp.address}
          </p>
          {/* Pass company props and department props to child components */}
          <DepartmentData 
            cname={this.comp.name} 
            cAddress={this.comp.address} 
          />
        
          
        </div>
      </Fragment>
    );
  }
}

export default CompanyData;
