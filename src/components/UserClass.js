import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update Count
        </button>
        <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: Noida</h3>
        <h3>Contact: kumarsanjay3722@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
