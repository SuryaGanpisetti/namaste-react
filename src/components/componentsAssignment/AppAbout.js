import React from "react";
import AppUser from "./AppUserClass";
class AppAbout extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    this.time = setInterval(() => {
      console.log("Parent componentDidMount Interval");
    }, 1000);
    console.log("Parent Mount");
  }
  componentWillUnmount() {
    clearInterval(this.time);
    console.log("Component Will Unmount");
    console.log("Parent Unmout");
  }
  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About(class)</h1>
        <h3>This is React practise Assignment</h3>
        <AppUser job={"Software Engineer"} />
      </div>
    );
  }
}

// const AppAbout = () =>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h3>This is React practise Assignment</h3>
//         </div>
//     )
// }

export default AppAbout;
