import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Component did mount.");
  }

  render() {
    return (
      <div className="about">
        <h1>About us Page</h1>
        <UserClass name={"Sanjay (Class)"} />
      </div>
    );
  }
}

export default About;
