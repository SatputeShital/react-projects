// import logo from './logo.svg';
// import './App.css';
// import AddTwoNumbers from'./AddTwoNumner';
// import CompanyData from './class-component/CompanyData.jsx';
// import DepartmentData from './class-component/DepartmentData';
// import EmployeeData from './class-component/EmployeeData';
// import CompanyDataArray from "./class-component-array/CompanyDataArray";

import ParentComp from "./array-obj-parentChildComm/ParentComp";


function App() {
  return (
    <div className="App">
      {/* <AddTwoNumbers /> */}
      <h2 style={{fontFamily:"cambria",textAlign:"center"}}> Component Communication</h2>
      {/* <p>Pass props Parent Component To Child Component </p> */}
      {/* <CompanyData /> */}
      {/* <DepartmentData /> */}
      {/* <EmployeeData /> */}
      {/* <CompanyDataArray /> */}

      <ParentComp/>

    </div>
  );
}

export default App;
