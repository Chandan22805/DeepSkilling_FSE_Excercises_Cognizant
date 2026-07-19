import React from "react";

class Getuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: true
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      person: data.results[0],
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    const { person } = this.state;

    return (
      <div>
        <h1>
          {person.name.title} {person.name.first}
        </h1>
        <img src={person.picture.large} alt={person.name.first} />
      </div>
    );
  }
}

export default Getuser;
