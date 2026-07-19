import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      errors: {
        fullName: "",
        email: "",
        password: ""
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...this.state.errors };

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email =
          value.includes("@") && value.includes(".") ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ [name]: value, errors });
  };

  validateForm = () => {
    const { fullName, email, password, errors } = this.state;
    return (
      fullName.length >= 5 &&
      email.includes("@") &&
      email.includes(".") &&
      password.length >= 8 &&
      !errors.fullName &&
      !errors.email &&
      !errors.password
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      alert("Valid Form");
    } else {
      const { errors } = this.state;
      if (errors.fullName) alert(errors.fullName);
      else if (errors.email) alert(errors.email);
      else if (errors.password) alert(errors.password);
      else alert("Please fill all fields correctly");
    }
  };

  render() {
    return (
      <div>
        <h1>Register Here!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
