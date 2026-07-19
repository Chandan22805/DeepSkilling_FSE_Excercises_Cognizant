import React from "react";

class ComplaintRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: "",
      complaint: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const referenceNumber = Math.floor(Math.random() * 1000000);
    const message =
      "Thanks " +
      this.state.ename +
      "\nYour Complaint was Submitted.\nTransaction ID is: " +
      referenceNumber;

    alert(message);
  };

  render() {
    return (
      <div>
        <h1>Register your complaints here!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="ename"
              value={this.state.ename}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Complaint: </label>
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
