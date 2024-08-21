import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter } from "react-router-dom";
import BasicSettingRegion from "./pages/BasicSettingRegion.jsx";
import NickName from "./pages/NickName.jsx";
import BasicSettingCategory from "./pages/BasicSettingCategory.jsx";
import WrongPath from "./pages/WrongPath.jsx";
import WagUser from "./pages/WagUser.jsx";
import WagMain from "./pages/WagMain.jsx";
import UserUploadedList from "./pages/UserUploadedList.jsx";
import UserLayout from "./components/UserLayout.jsx";
import UserLikeList from "./pages/UserLikeList.jsx";

export const RouterList = () => [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "intro",
        children: [
          {
            index: true,
            element: <WrongPath />,
          },
          {
            path: "nickname",
            element: <NickName />,
          },
          {
            path: "region",
            element: <BasicSettingRegion />,
          },
          {
            path: "category",
            element: <BasicSettingCategory />,
          },
          {
            path: "*",
            element: <WrongPath />,
          },
        ],
      },
      {
        //메인페이지
        path: "main",
        element: <WagMain />,
      },
      {
        //마이페이지 라우터
        path: "user",
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <WrongPath />,
          },
          {
            //마이페이지
            path: "main",
            element: <WagUser />,
          },
          {
            //마이페이지 업로드한 동영상 더보기
            path: "uploaded",
            element: <UserUploadedList />,
          },
          {
            //마이페이지 좋와요를 누른 동영상 더보기
            path: "uploaded",
            element: <UserLikeList />,
          },
        ],
      },
      {
        path: "*",
        element: <WrongPath />,
      },
    ],
  },
];

// Create the RouterObject using createBrowserRouter and RouterList function
export const RouterObject = createBrowserRouter(RouterList());
