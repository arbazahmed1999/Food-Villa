import "./index.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import Error from "./Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Contact.js";
import RestaurantMenu from "./RestaurantMenu.js";
import Profile from "./ProfileClass.js";
import Shimmer from "./Shimmer.js";
import store from "./utils/store.js";
import { Provider } from "react-redux";
import Cart from "./Cart.js";
import Header from "./Header.js";

const Instamart = lazy(() => import("./Instamart.js"));
const About = lazy(() => import("./About"));

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;
