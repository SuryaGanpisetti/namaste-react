/*
● AddShimmer Effect without installing a library - DONE
● Install react-router-dom - DONE
● Create a appRouter and Provide it to the app
● Create a Home, About, Contact Page with Link (use child routes)
● MakeaError page for routing errors
● Create a Restaurant Page with dynamic restaurant ID
● (Extra)- Create a login Page using Formik Librar
*/

import ReactDOM from "react-dom/client";
import AppHeader from "./components/componentsAssignment/AppHeader";
import AppBody from "./components/componentsAssignment/AppBody";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AppAbout from "./components/componentsAssignment/AppAbout";
import AppContact from "./components/componentsAssignment/AppContact";
import AppError from "./components/componentsAssignment/AppError";
import RestaurantMenuListCompnent from "./components/componentsAssignment/RestaurantMenuListCompnent";

const FoodAppLayout = () => {
  return (
    <div className="foodApp">
      <AppHeader />
      <Outlet />
    </div>
  );
};

const assignmentAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodAppLayout />,
    errorElement: <AppError />,
    children: [
      {
        path: "/",
        element: <AppBody />,
      },
      {
        path: "/about",
        element: <AppAbout />,
      },
      {
        path: "/contact",
        element: <AppContact />,
      },
    ],
  },
  {
    path: "/about",
    element: <AppAbout />,
  },
  {
    path: "/conontact",
    element: <AppContact />,
  },
  {
    path: "/restaurants/:resID",
    element: <RestaurantMenuListCompnent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={assignmentAppRouter} />);
