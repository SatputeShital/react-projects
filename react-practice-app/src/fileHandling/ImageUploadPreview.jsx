import React, { useState } from "react";

const ImageUploadPreview = () => {
  const [image, setImage] = useState(null);

  // Handle file upload and display image preview
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image preview URL
      };
      reader.readAsDataURL(file); // Read the image as a data URL
    }
  };

  return (
    <div>
      <h2>Profile Image</h2>
      <input type="file" onChange={handleFileChange} accept="image/*" style={{color:"blue"}} />
      
      {image && (
        <div>
          <h3>Name:</h3>
          <img src={image} alt="Uploaded Preview" style={{ width: "200px", height: "200px", borderRadius:"50%" }} />
        </div>
      )}
    </div>
  );
};

export default ImageUploadPreview;
