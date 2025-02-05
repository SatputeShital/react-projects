import React, { useState } from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import { Form, Button, Col, Row } from "react-bootstrap";

const DownloadProfile = () => {
  // Image Upload
  const [image, setImage] = useState(null);

  // Known Languages Range
  const [hvalue, sethValue] = useState(50);
  const [cvalue, setcValue] = useState(50);
  const [jvalue, setjValue] = useState(50);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    birthDate: "",
    profilePicture: null,
    favoriteColor: "#000000",
    aboutme: "",
    experience: 50,
    languages: {
      hindi: hvalue,
      sanskrit: cvalue,
      english: jvalue,
    },
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file upload and image preview
  const handleImgFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setFormData((prevData) => ({
          ...prevData,
          profilePicture: reader.result, // Store the image preview URL
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle known languages range value change
  const handleLanguageChange = (language, value) => {
    setFormData((prevData) => ({
      ...prevData,
      languages: {
        ...prevData.languages,
        [language]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  // Download form data as a TXT file
  const downloadTxtFile = () => {
    const data = JSON.stringify(formData, null, 2);
    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "profileData.txt";
    link.click();
  };

  return (
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
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5>Hindi: </h5>
                <FormRange
                  value={hvalue}
                  onChange={(event) => {
                    const value = event.target.value;
                    sethValue(value);
                    handleLanguageChange("hindi", value);
                  }}
                  style={{ width: "280px", marginLeft: "50px" }}
                />
                <span>{hvalue}%</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5>Sanskrit: </h5>
                <FormRange
                  value={cvalue}
                  onChange={(event) => {
                    const value = event.target.value;
                    setcValue(value);
                    handleLanguageChange("sanskrit", value);
                  }}
                  style={{ width: "280px", marginLeft: "30px" }}
                />
                <span>{cvalue}%</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5>English:</h5>
                <FormRange
                  value={jvalue}
                  onChange={(event) => {
                    const value = event.target.value;
                    setjValue(value);
                    handleLanguageChange("english", value);
                  }}
                  style={{ width: "280px", marginLeft: "40px" }}
                />
                <span>{jvalue}%</span>
              </div>
            </div>
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
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="aboutme">
                <Form.Label>About Me</Form.Label>
                <Form.Control
                  as="textarea"
                  name="aboutme"
                  value={formData.aboutme}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Button variant="secondary" onClick={downloadTxtFile}>
          Download Profile Data as TXT
        </Button>
      </div>
    </div>
  );
};

export default DownloadProfile;
