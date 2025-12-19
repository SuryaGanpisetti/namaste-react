/* 
○ Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”) DONE
○ Create the same element using JSX DONE
○ Create a functional component of the same with JSX DONE
○ Passattributes into the tag in JSX DONE
○ Composition of Component(Add a component inside another) DONE
○ {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JS 
○ Create a Header Component from scratch using Functional Components with JSX DONE
○ AddaLogoonleft
○ Addasearch bar in middle
○ AddUser icon on right
○ AddCSStomakeit look nic
*/
import  React  from "react";
import  ReactDOM  from "react-dom/client";

const NestedElement = React.createElement('div',{className:'title'}, 
                                            React.createElement('p',{className:'ptag'},'Nested header Element using React.createElement'),
                                            React.createElement('h1',null,'This is H1'),
                                            React.createElement('h2',null,'This is H2'),
                                            React.createElement('h3',null,'This is H3')
                                        );
const NestedHeadingJSX = (
    <div className="title">
        <p className='ptag'>Nested header Element using JSX</p>
        <h1 className="heading">This is H1</h1>
        <h2 className="heading">This is H2</h2>
        <h3 className="heading">This is H3</h3>
    </div>
)     
const TitleComponent = () => <h1 className='ptag'>This is Title Component</h1>;
const NestedFunctionalHeading = () =>(
      <div className="titl">
        {NestedElement}
        {NestedHeadingJSX}
        <p className='ptag'>Nested header using Functional componet</p>
        <h1 className="heading">This is H1</h1>
        <h2 className="heading">This is H2</h2>
        <h3 className="heading">This is H3</h3>
        {TitleComponent()}
        <TitleComponent/>
        <TitleComponent></TitleComponent>
    </div>
)      
const HeaderComponent = () =>(
  <div className="header">
    <div className="logo">Logo</div>
    <div className="search">
      <input type="text" placeholder="Search..." />
    </div>
    <div className="icon">👤</div>
  </div>

)                             
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>)
