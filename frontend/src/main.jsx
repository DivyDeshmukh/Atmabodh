import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AllPages, Home, Login, Signup } from "./components/index.js";
import store from "./store/auth.js";
import { Provider } from "react-redux";
import Carousel from "./components/Carousel.jsx";
import Podcasts from "./components/Podcasts.jsx";
import Pricing from "./components/Pricing.jsx";
import BlogPage from "./components/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login singlePage={true} />,
  },
  {
    path: "/signup",
    element: <Signup singlePage={true} />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllPages />,
      },
      {
        path: "/podcasts",
        element: <Podcasts />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
