import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log(" Parent Component Did Mount ");
  }
  render() {
    return (
      <>
        <h1>About</h1>
        <h3>This is Namaste React App</h3>
        <UserClass
          name={"Basirul (Class)"}
          Location={"Dehradun Utarakhand Class"}
        />
      </>
    );
  }
}
export default AboutClass;
