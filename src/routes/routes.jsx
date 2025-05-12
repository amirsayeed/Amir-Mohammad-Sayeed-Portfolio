import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/about',
            Component: About
        },
        {
            path: '/portfolio',
            Component: Portfolio
        },
        {
            path: '/blogs',
            Component: Blogs
        },
        {
            path: '/contact',
            Component: Contact
        }
    ]
  },
]);