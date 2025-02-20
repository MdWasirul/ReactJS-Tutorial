import React, { Component } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Md Basirul Quadri Ghosrama Noori Mohalla",
        location: "Muzaffarpur",
        avatar_url: "https://google.com",
      },
    };

    console.log("child constructor");
  }
  async componentDidMount() {
    console.log("child componentDidMount");
    //API Calls here.
    const response = await fetch("https://api.github.com/users/MdWasirul");
    const data = await response.json();
    console.log("Data:", data);
    this.setState({
      userInfo: data,
    });
  }
  componentDidUpdate() {
    console.log("component Did update");
  }
  componentWillUnmount() {
    console.log("component will Unmounted!");
  }
  render() {
    console.log("child Rendered");
    // const { name, Location } = this.props;
    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <img src={avatar_url} alt="Avtar photo" />
        <h2>Location: {location}</h2>
        <h3>{bio}</h3>
        <h3>Contact:@Basirulquadri786</h3>
      </div>
    );
  }
}
export default UserClass;
