import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About us Page</h1>
      {/* <User name={"Sanjay (functional)"} /> */}
      <UserClass name={"Sanjay (Class)"} />
    </div>
  );
};

export default About;
