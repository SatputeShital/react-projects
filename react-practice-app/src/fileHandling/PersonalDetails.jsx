
import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    birthDate: '',
    profilePicture: null,
    favoriteColor: '#000000',
    experience: 50,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              as="select"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="birthDate">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="favoriteColor">
            <Form.Label>Favorite Color</Form.Label>
            <Form.Control
              type="color"
              name="favoriteColor"
              value={formData.favoriteColor}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="experience">
            <Form.Label>Experience (1-100)</Form.Label>
            <Form.Control
              type="range"
              name="experience"
              min="1"
              max="100"
              value={formData.experience}
              onChange={handleChange}
            />
            <Form.Text>{formData.experience}</Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="profilePicture">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              name="profilePicture"
              onChange={handleFileChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProfileForm;



























































// import Form from 'react-bootstrap/Form';


// function PersonalDetails() {
//     return (
//         <>
//         <div style={{border:"2px black"}}>
//         <Form>
        
//           <Form.Label>Name:</Form.Label>
//           <Form.Control type="text" placeholder="Enter Name" required/>
        
//         {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>Mobile Number</Form.Label>
//           <Form.Control type="number" placeholder="Enter Mobile Number" required />
//         </Form.Group> */}
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>Birth Date</Form.Label>
//           <Form.Control type="date"  required />
//         </Form.Group>
//         <div>
//             <label> Gender:</label>
//         <select
//             name="gender"
          
//           >
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>Mobile Number</Form.Label>
//           <Form.Control type="number" placeholder="Enter Mobile Number" required />
//         </Form.Group>

//         <label for="country">Country: </label>
//         <select id="country" name="country">
//             <option value="">Select a country</option>
//             <option value="USA">United States</option>
//             <option value="Canada">Canada</option>
//             <option value="UK">United Kingdom</option>
//             <option value="Australia">Australia</option>
//             <option value="India">India</option>
//             <option value="Germany">Germany</option>
//             <option value="France">France</option>
//             <option value="Italy">Italy</option>
//         </select>

//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="name@example.com" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//           <Form.Label>About Me</Form.Label>
//           <Form.Control as="textarea" rows={3} />
//         </Form.Group>
//       </Form>
//         </div>
//         </>
      
//     );
//   }
  
//   export default PersonalDetails;