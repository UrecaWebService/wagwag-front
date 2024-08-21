import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
import {createBrowserRouter, Navigate} from "react-router-dom";
import BasicSettingRegion from "./pages/BasicSettingRegion.jsx";
import NickName from "./pages/NickName.jsx";
import BasicSettingCategory from "./pages/BasicSettingCategory.jsx";
import WrongPath from "./pages/WrongPath.jsx";

// Define the RouterList as a function for modularity
export const RouterList = () => [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        path: "/intro",
        children: [
            //경로예외처리 1
          {
            index: true,
            element: <Navigate to="/intro/login" replace />,
          },
          {
            path: "region",
            element: <BasicSettingRegion />,
          },
          {
            path: "nickname",
            element: <NickName />,
          },
          {
            path: "category",
            element: <BasicSettingCategory />,
          },
            //경로 예외처리 2
          {
            path: "*",
            element: <WrongPath/>, // Fallback for invalid paths under /intro
          },
        ],
      },
      {
        path: "/main",
        element: <BasicSettingCategory />,
      },
      {
        path: "/user",
        element: <BasicSettingCategory />,
      },
    ],
  },
];

// Create the RouterObject using createBrowserRouter and RouterList function
export const RouterObject = createBrowserRouter(RouterList());
