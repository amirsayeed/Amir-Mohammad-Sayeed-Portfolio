import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        Component: Home,
      },
      // {
      //   path: "/portfolio",
      //   // loader: ()=> fetch('../projects.json'),
      //   Component: Portfolio,
      // },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
