import { Component } from "react";

class AppUser extends Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        avatar_url: "Dummy Profile Image",
      },
    };
  }
  async componentDidMount() {
    console.log("Child Mount");
    //API call
    const data = await fetch("https://api.github.com/users/SuryaGanpisetti");
    const json = await data.json();
    //console.log("JSON--->", json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("Child Update");
  }
  componentWillUnmount() {
    console.log("Child Unmout");
  }
  render() {
    console.log("Child Render");

    const { job } = this.props;
    const { name, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>{name}</h1>
        <h3>{job}</h3>
      </div>
    );
  }
}

export default AppUser;
