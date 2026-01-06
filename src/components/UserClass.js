import React from "react";
import Contact from "./Contact";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo:{
            name: "Dummy",
            location:"Dummy location"
        }
    }
    //console.log(this.props.name,"Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name,"Child Mount");
    //API call
    const data = await fetch("https://api.github.com/users/SuryaGanpisetti");
    const json = await data.json();
    //console.log("JSON--->", json);
    
    this.setState({
        userInfo: json
    });
  }

  componentDidUpdate(){
    this.time = setInterval(()=>{
            console.log("componentDidMount Interval");   
        },1000);
    console.log("Component Did Update");
  }

  componentWillUnmount(){
    clearInterval(this.time);
    console.log("Component Will Unmount");
    
  }
  render() {
    const { name, avatar_url } = this.state.userInfo;
    //const { count, count2 } = this.state;

     console.log(this.props.name,"Child Render");

    return (
      <div className="user-card">
        {/* <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button> */}
        <h1>{name}</h1>
        <img src={avatar_url}/>
        {/* <Contact name={"Sub"}/> */}
      </div>
    );
  }
}

export default UserClass;
