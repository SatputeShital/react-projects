import React, { useState } from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import { Form, Button, Col, Row } from "react-bootstrap";

const ProfileFormOneComp = () => {
  //Image Upload
  const [image, setImage] = useState(null);

  // Handle file upload and display image preview
  const handleImgFileChange = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image preview URL
      };
      reader.readAsDataURL(file); // Read the image as a data URL
    }
  };
  //End ImgUpload
  

  //Range
  const [hvalue, sethValue] = useState(50);
  const [cvalue, setcValue] = useState(50);
  const [jvalue, setjValue] = useState(50);
  //End Range

  //Personal Details

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    birthDate: "",
    profilePicture: null,
    favoriteColor: "#000000",
    aboutme:" ",
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
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       profilePicture: file,
//     }));
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <div id="main">
        <div id="img-range">
          <div id="imgUp">
            <h2>Profile Image</h2>
            <input
              type="file"
              onChange={handleImgFileChange}
              accept="image/*"
              style={{ color: "blue" }}
            />

            {image && (
              <div>
                <h3>Name:</h3>
                <img
                  src={image}
                  alt="Uploaded Preview"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            )}
          </div>
          <div id="langrange">
            <Container>
              <h3 className="mb-5" style={{ color: "#106C50" }}>
                Known Languages
              </h3>

              {/* <Row className="w-50 mb-5" color="black"> */}
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h5>Hindi: </h5>
                  <FormRange
                    value={hvalue}
                    onChange={(event) => {
                      sethValue(event.target.value);
                    }}
                    style={{ width: "280px", marginLeft: "50px" }}
                  /><span>
                    {hvalue}%
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h5> Sanskrit: </h5>
                  <FormRange
                    value={cvalue}
                    onChange={(event) => {
                      setcValue(event.target.value);
                    }}
                    style={{ width: "280px", marginLeft: "30px" }}
                  />
                  <span>
                    {cvalue}%
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h5>English:</h5>
                  <FormRange
                    value={jvalue}
                    onChange={(event) => {
                      setjValue(event.target.value);
                    }}
                    style={{ width: "280px", marginLeft: "40px" }}
                  />
                  <span>
                    {jvalue}%
                  </span>
                </div>
              </div>

              {/* </Row> */}
              {/* <Row>
				<h3>Range Value: {value}</h3>
			</Row> */}
            </Container>
          </div>
        </div>
        <div id="details">
          <h2>Profile Page</h2>
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
              </Row>
              <Row>
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
              </Row>

              <Row>

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

              <Row>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>About Me</Form.Label>
                  <Form.Control
                    type="textarea"
                    name="aboutme"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Yourself..."
                  />
                </Form.Group>
              </Col>
            </Row>
              {/* <Col md={6}>
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
              </Col> */}
            </Row>

            <Row>
              {/* <Col md={6}>
                <Form.Group controlId="profilePicture">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control
                    type="file"
                    name="profilePicture"
                    onChange={handleFileChange}
                  />
                </Form.Group>
              </Col> */}
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ProfileFormOneComp;
