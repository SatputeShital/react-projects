import React, { useEffect , useRef, useState } from "react";
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
    gender:"",
    profilePicture: null,
    favoriteColor: "#000000",
    aboutme: "",
   
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

  const nameRef = useRef();
    // const emailRef = useRef();
  useEffect(() => {
    nameRef.current.focus();
    // emailRef.current.focus();
})

  // Download form data as a TXT file
//   const downloadTxtFile = () => {
//     const data = JSON.stringify(formData, null, 2);
//     const blob = new Blob([data], { type: "text/plain" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "profileData.txt";
//     link.click();
//   };

  return (
    <div id="main">
        
      <div id="img-range">
        <div id="imgUp">
          <u><h2 style={{marginBottom:"10px"}}>Profile Image</h2></u>
          {image && (
            <div>
              
              <img
                src={image}
                alt="Uploaded Preview"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                }}
              />
              
              <h5 style={{marginTop:"10px"}}>Name : {formData.name}</h5>
            </div>
          )}
<hr />
          <input
            type="file"
            onChange={handleImgFileChange}
            accept="image/*"
            style={{ color: "blue" , alignItems:"center"}}
          />
       
        </div>
        <div id="langrange">
          <Container>
          <u>  <h3 className="mb-5" style={{marginTop:"20px",paddingBottom:"0px" }}>
              Known Languages
            </h3></u>
            
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5 style={{marginLeft:"20px"}}>Hindi: </h5>
                <FormRange
                  value={hvalue}
                  onChange={(event) => {
                    const value = event.target.value;
                    sethValue(value);
                    handleLanguageChange("hindi", value);
                  }}
                  style={{ width: "255px", marginLeft: "50px" }}
                />
                <span>{hvalue}%</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5 style={{marginLeft:"20px"}}>Sanskrit: </h5>
                <FormRange
                  value={cvalue}
                  onChange={(event) => {
                    const value = event.target.value;
                    setcValue(value);
                    handleLanguageChange("sanskrit", value);
                  }}
                  style={{ width: "255px", marginLeft: "30px" }}
                />
                <span>{cvalue}%</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5 style={{marginLeft:"20px"}}>English:</h5>
                <FormRange
                  value={jvalue}
                  onChange={(event) => {
                    const value = event.target.value;
                    setjValue(value);
                    handleLanguageChange("english", value);
                  }}
                  style={{ width: "255px", marginLeft: "40px" }}
                />
                <span>{jvalue}%</span>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div id="details">
        <u><h2>Profile Page</h2></u>
        <Form id="form1" onSubmit={handleSubmit} >
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
                  ref={nameRef}
                  style={{width:"600px"}}
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
                 
                  style={{width:"600px"}}
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
                  style={{width:"600px"}}
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
                <Form.Label >Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  style={{width:"600px"}}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
  <Col md={6}>
    <Form.Group controlId="gender">
      <Form.Label>Gender</Form.Label>
      <div style={{ width: "600px", display: "flex", gap: "15px", alignItems: "center" }}>
        <Form.Check
          type="radio"
          label="Male"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
          inline
        />
        <Form.Check
          type="radio"
          label="Female"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
          inline
        />
        <Form.Check
          type="radio"
          label="Other"
          name="gender"
          value="other"
          checked={formData.gender === "other"}
          onChange={handleChange}
          inline
        />
      </div>
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
                  style={{width:"200px"}}
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
                  style={{width:"600px"}}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" style={{marginTop:"20px", width:"150px"}}>
            Submit
          </Button>
        </Form>
        {/* <Button variant="secondary" onClick={downloadTxtFile}>
          Download Profile Data as TXT
        </Button> */}
      </div>
    </div>
  );
};

export default DownloadProfile;
