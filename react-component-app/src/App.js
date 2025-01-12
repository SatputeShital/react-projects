// import logo from './logo.svg';
// import './App.css';
// import AddTwoNumbers from'./AddTwoNumner';
import CompanyData from './class-component/CompanyData.jsx';
// import DepartmentData from './class-component/DepartmentData';
// import EmployeeData from './class-component/EmployeeData';


function App() {
  return (
    <div className="App">
      {/* <AddTwoNumbers /> */}
      <h2 style={{fontFamily:"cambria",textAlign:"center"}}> Class Component Communication</h2>
      {/* <p>Pass props Parent Component To Child Component </p> */}
      <CompanyData />
      {/* <DepartmentData /> */}
      {/* <EmployeeData /> */}

    </div>
  );
}

export default App;
