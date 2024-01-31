import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../context/userContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("Component did mount.");
  }

  render() {
    return (
      <div className="about w-[1200px] mx-auto my-5">
        <h1 className="font-bold text-lg mb-5">About us Page</h1>
        <div className="font-bold text-lg mb-5">
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Sanjay (Class)"} />
      </div>
    );
  }
}

export default About;
