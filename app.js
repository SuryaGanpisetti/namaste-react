import  React  from "react";
import  ReactDOM  from "react-dom/client";

// React.createElement => ReactElement-JS object => HTMLElement(render)

//const heading = React.createElement('h1',{id:"heading"},'Surya is here!')
//console.log(heading);

// JSX - HTML-Like / XML-Like syntax
// JSX(transpiled before it reachs to the JS engine in the browser) - PARCEL - Babe
// JSX => React.createElement => Babel transpile it to ReactElement-JS object => HTMLElement(render)

// React Element
const jsxHeading = (
                    <h1 className="heading" tabIndex="5">
                     Namaste-React using JSX
                    </h1>
                    );   

 // React Component    
 // Class Based Component - Old
 // Functional Component - New 
 
 // Functional Component => FC is a normal JS function which retun JSX.
// const HeadingComponent = () =>{
//     return <h1>Namaste React Functional component</h1>
// }
const elm = <span>React Element</span>;
const titleCard = (
    <div>
    {elm}
    <h1>Title Card React Element</h1> 
    </div>
);
const Title = () => (
    <div>
        <h1 className="titleElement">Namaste React Using JSX</h1> 
    </div>
);
const text = "This is rendering using JS in Functional component -> Heading component";
//Component Composition✌️
const HeadingComponent = () =>(
    <div className="container">
        <h1 className="heading">Namaste React Functional component</h1>
        <h2 className="jsHeading">{text}</h2>
        {titleCard}
        {Title()}
        <Title/>
        <Title></Title>
        
     </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
root.render(<HeadingComponent />);
