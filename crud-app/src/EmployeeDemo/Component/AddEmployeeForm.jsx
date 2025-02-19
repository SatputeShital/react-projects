// src/components/AddEmployeeForm.jsx
import React, { useState } from "react";
import { useEmployeeContext } from "../Context/DEmployeeContext";

const AddEmployeeForm = () => {
  const { addEmployee } = useEmployeeContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && position) {
      const newEmployee = { id: Date.now(), name, email, position };
      addEmployee(newEmployee); // Add employee to context
      setName("");
      setEmail("");
      setPosition("");
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
      <div>
        <label className="block font-bold mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter employee name"
        />
      </div>
      <div>
        <label className="block font-bold mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter employee email"
        />
      </div>
      <div>
        <label className="block font-bold mb-1">Position</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter employee position"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployeeForm;
