import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");

  }
  async componentDidMount() {
    //console.log("Parent Mount");
    //api
  }
  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This series is about Namsate React..!</h2>
        <UserClass/>
      </div>
    );
  }
}
// const About = () =>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This series is about Namsate React..!</h2>
//             <UserClass name = {"Ganpisetti Surya Teja(Class)"}/>
//         </div>
//     )
// }

export default About;
