import ReactDOM from "react-dom/client";
import AppHeader from "./components/componentsAssignment/AppHeader";
import AppBody from "./components/componentsAssignment/AppBody";
/*
Coding Assignment:
● Clean up your code
● Create a Folder Structure for your app
● Makedifferent files for each Components
● Create a config file
● Useall types of import and export
● Create a Search Box in your App
● UseuseState to create a variable and bind it to the input box
● Tryto make your search bar work
 */

const FoodAppLayout = () => {
  return (
    <div className="foodApp">
      <AppHeader />
      <AppBody />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodAppLayout />);
