import React, { useState } from "react";

const ProfileForm = () => {
  // Initialize state to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    favoriteColor: "#000000",  // Default color (black)
    birthDate: "",
    selectedFile: null,
    rating: 50,  // Default value for range (50 out of 100)
    gender: "male",  // Default selected option
  });

  // Handle input field changes
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    // Handle file input separately
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Store uploaded file
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, // Store other field values
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log or handle form data, e.g., send it to an API
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      <h2>Profile Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Color Picker Field */}
        <div>
          <label>Favorite Color: </label>
          <input
            type="color"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
          />
        </div>

        {/* Date Picker Field */}
        <div>
          <label>Birth Date: </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* File Upload Field */}
        <div>
          <label>Upload Profile Picture: </label>
          <input
            type="file"
            name="selectedFile"
            onChange={handleChange}
          />
        </div>

        {/* Range (1 to 100) Field */}
        <div>
          <label>Rating (1 to 100): </label>
          <input
            type="range"
            name="rating"
            min="1"
            max="100"
            value={formData.rating}
            onChange={handleChange}
          />
          <span>{formData.rating}</span> {/* Display selected range value */}
        </div>

        {/* Gender Select Field */}
        <div>
          <label>Gender: </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;
