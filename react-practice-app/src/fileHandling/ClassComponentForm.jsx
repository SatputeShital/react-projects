import React, { Component } from "react";

class ClassComponentForm extends Component {
  constructor(props) {
    super(props);

    // Step 1: Define the state to hold form values
    this.state = {
      name: "",
      email: "",
      mobNumber: "",
    };

    // Step 2: Create refs for name and email input fields
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  // Step 3: Handle form input changes
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value, // Dynamically update the state based on input field name
    });
  };

  // Step 4: Set focus on the input fields when the component mounts
  componentDidMount() {
    this.nameRef.current.focus(); // Focus on the name input field
  }

  // Step 5: Handle form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // You can now process or send the form data
    alert(`Name: ${this.state.name}\nEmail: ${this.state.email}\nMobile: ${this.state.mobNumber}`);
  };

  render() {
    return (
      <>
        <h2>Advanced Form Handling (Class Component)</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter your name"
              required
              ref={this.nameRef} // Reference to focus on mount
            />
            <br />
            <br />
          </label>

          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter your email"
              ref={this.emailRef} // Reference to email field
            />
            <br />
            <br />
          </label>

          <label>
            Mobile No:{" "}
            <input
              type="number"
              name="mobNumber"
              value={this.state.mobNumber}
              onChange={this.handleChange}
              placeholder="Enter your mobile number"
            />
            <br />
            <br />
          </label>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default ClassComponentForm;
