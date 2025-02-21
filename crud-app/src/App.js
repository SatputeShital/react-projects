
// import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import CRUDMain from './Emp/CRUDMain';
// import EmployeeList from './Emp/EmployeeList';


// function App() {
//   return (
//     <div className="App">
//     <h1>
//       Employee
//     </h1>
//     <hr style={{width:"100%", color:"black"}}></hr>
//     <CRUDMain>
//       <EmployeeList/>
//     </CRUDMain>
  
      
//     </div>
//   );
// }

// export default App;





import './App.css';
import AllEmployee from './Employee/AllEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee/Employee';

function App() {
  return (
    <div className="App">
    <h1>
      Employee
    </h1>
    <hr style={{width:"100%", color:"black"}}></hr>
 
    <Employee>
      <AllEmployee/>
    </Employee>
  
      
    </div>
  );
}

export default App;



// // src/App.jsx
// import React from "react";
// import { EmployeeProvider } from "./EmployeeDemo/Context/DEmployeeContext";
// import AddEmployeeForm from "./EmployeeDemo/Component/AddEmployeeForm";
// import DEmployeeList from "./EmployeeDemo/Component/DEmployeeList";
// // import Main from './EmployeeDemo/Component/Main';

// const App = () => {
//   return (
//     <EmployeeProvider>
//       <div className="p-8">
//         <h1 className="text-2xl font-bold mb-6">Add Employee Data</h1>
       
//         <AddEmployeeForm />
//         <DEmployeeList />
//       </div>
//     </EmployeeProvider>
    
//   );
// };

// export default App;
