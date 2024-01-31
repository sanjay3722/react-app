import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
      count: 0,
      count2: 2,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sanjay3722");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name } = this.props;
    const { count, count2 } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card flex">
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update Count
        </button> */}
        {/* <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2> */}
        <div className="w-[200px] mr-5">
          <img src={avatar_url} alt="img" className="w-100" />
        </div>
        <div>
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h3>Contact: kumarsanjay3722@gmail.com</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
