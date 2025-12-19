import ReactDOM from "react-dom/client";

const AssginmentComponent = () =>{
    return(
        <div>
            <h1>Writing component in JSX</h1>
        </div>
    );
};
/*
Coding Assignment:
● Build a Food Ordering App
○ Think of a cool name for your app
○ Build a AppLayout
○ Build a Header Component with Logo & Nav Items & Cart
○ Build a Body Component
○ Build RestaurantList Component
○ Build RestaurantCard Component
○ Usestatic data initially
○ Makeyour card dynamic(pass in props)
○ Props- passing arguments to a function- Use Destructuring & Spread
operator
○ Render your cards with dynamic data of restaurants
○ UseArray.map to render all the restaurants
PS. Basically do everything that I did in the class, in the same sequence. Don't skip
small things.
 */
const AppHeader = () =>{
        return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="Food App Logo" src="https://img.freepik.com/premium-vector/logo-food-ordering-company-with-fork-speech-bubble-logo-lunch-delivery_1107171-4493.jpg?semt=ais_hybrid"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>My Orders</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const restaruntList = [
    {
        id: "11",
        name: "Bawarchi"
    },
    {
        id: "12",
        name: "Green Bawarchi"
    },
    {
        id: "22",
        name: "Shadab Hotel"
    },
     {
        id: "33",
        name: "Shahgouse"
    },
]
const restaruntMenu = [
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
const styleCard ={
    backgroundColor: "darkgray",
    color: "white"
};
const RestaurantListCompnent = (props) =>{
    const {resData} = props;
    return(
        <div className="res-list">
            <h1>{resData.name}</h1>
        </div>
    );
};
const RestaruntCardCompnent = (props) =>{
    console.log(props);
    
    const {resMenuData} = props
    return(
            <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6d8627d8366cf0a4f0fc7acd01166ee9"/>
            <h3>{resMenuData?.resName}</h3>
            <h4>{resMenuData?.cuisine}</h4>
            <h4>{resMenuData?.rating}</h4>
            <h4>{"$"+resMenuData?.costForTwo + "For Two"}</h4>
        </div>
    );
};
const AppBody = () =>{
    return(
        <div className="body">
            <div className="restarunt-list">
                {
                    restaruntList.map((restarunt)=>(
                        <RestaurantListCompnent key = {restarunt.id} resData = {restarunt}>
                            {restaruntMenu.map((restaruntMenuEle)=>(
                                <RestaruntCardCompnent key = {restaruntMenuEle?.id} resMenuData = {restaruntMenuEle}/>
                            ))}
                        </RestaurantListCompnent>
                    ))
                }
            </div>
        </div>
    );
};
const FoodAppLayout = () =>{
    return(
        <div className="foodApp">
            <AppHeader/>
            <AppBody/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodAppLayout/>);