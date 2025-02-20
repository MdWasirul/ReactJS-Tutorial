import React, { Component } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Child Constructors ");
  }
  componentDidMount() {
    console.log("child Component Did Mount");

    //API Calls here.
  }
  render() {
    console.log(" Child Class Render ");
    const { name, Location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        {/* <h2>Name:MD Basirul Haque</h2> */}
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            //Never update state variable directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update Button
        </button>
        <h2>Name:{name}</h2>

        <h2>Location: {Location}</h2>
        <h3>Contact:@Basirulquadri786</h3>
      </div>
    );
  }
}
export default UserClass;
