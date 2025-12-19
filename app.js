import  React  from "react";
import  ReactDOM  from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo "src="https://img.freepik.com/premium-vector/food-logo-design-with-leaf-creative-concept-premium-vector_526458-2675.jpg?w=2000"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const styleCard ={
    backgroundColor: "darkgray",
    color: "white"
};
const resList = [
    {
        id: "111",
        resName: "Surya's Kithcen",
        cuisine: "Biryani, North Indian, Asian",
        rating: "4.3 stars",
        deliveryTime: "38 minutes",
        costForTwo: 400
    },
    {
        id: "222",
        resName: "KFC",
        cuisine: "Fried Food, PAN Asian",
        rating: "4.5 stars",
        deliveryTime: "50 minutes",
        costForTwo: 800
    },
    {
        id: "333",
        resName: "MAC'D",
        cuisine: "Soft food, PAN",
        rating: "4.1 stars",
        deliveryTime: "30 minutes",
        costForTwo: 300
    },
    {
        id: "444",
        resName: "WOW O BOW",
        cuisine: "Mixing, Asian",
        rating: "3.5 stars",
        deliveryTime: "60 minutes",
        costForTwo: 200
    },
]
const RestaruntCard = (props) =>{
    const {resData} = props;
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6d8627d8366cf0a4f0fc7acd01166ee9"/>
            <h3>{resData.resName}</h3>
            <h4>{resData.cuisine}</h4>
            <h4>{resData.rating}</h4>
            <h4>{"$"+resData.costForTwo + "For Two"}</h4>
        </div>
    );
};
const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restarunt)=>(
                        <RestaruntCard key = {restarunt.id} resData = {restarunt}/>
                    ))
                }
            </div>
        </div>
    );
};
const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);