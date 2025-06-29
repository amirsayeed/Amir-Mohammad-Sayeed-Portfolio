import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import Loading from "../components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'projectDetails/:id',
        loader: ()=> fetch('../projects.json'),
        hydrateFallbackElement: <Loading/>,
        Component: ProjectDetails
      }
    ]
  },
]);
