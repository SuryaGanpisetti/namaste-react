// import { Component } from "react";

import { useEffect } from "react";

// class Contact extends Component {
//     constructor(props) {
//         super(props);
//          console.log(this.props.name," Child Constructor");
//     }
//       componentDidMount() {
//     console.log(this.props.name,"Child Mount");
//   }
//     render(){
//         console.log(this.props.name," Child Render");
//         return (
//         <div>
//             <h1>Contact Us</h1>
//         </div>
//     )
//     }
// }

const Contact = () => {
    useEffect(()=>{
        const time = setInterval(()=>{
            console.log("useEffect Interval");   
        },1000)
        console.log("useEffect()");
        return()=>{
            clearInterval(time);
            console.log("useEffect() return");  
        }    
    },[]);
    console.log("Render");
    
    return (
        <div>
            <h1>Contact Us</h1>
        </div>
    )
}

export default Contact;