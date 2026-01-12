/*
● Create your custom hooks
● Tryout lazy and suspense
● Makeyour code clean.
*/

import ReactDOM from "react-dom/client";
import AppHeader from "./components/componentsAssignment/AppHeader";
import AppBody from "./components/componentsAssignment/AppBody";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AppAbout from "./components/componentsAssignment/AppAbout";
import AppContact from "./components/componentsAssignment/AppContact";
import AppError from "./components/componentsAssignment/AppError";
import RestaurantMenuListCompnent from "./components/componentsAssignment/RestaurantMenuListCompnent";
//import AppGrocery from "./components/componentsAssignment/AppGrocery";
import { lazy, Suspense } from "react";

const FoodAppLayout = () => {
  return (
    <div className="foodApp">
      <AppHeader />
      <Outlet />
    </div>
  );
};
const AppGrocery = lazy(() =>
  import("./components/componentsAssignment/AppGrocery")
);
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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.........</h1>}>
            <AppGrocery />
          </Suspense>
        ),
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
