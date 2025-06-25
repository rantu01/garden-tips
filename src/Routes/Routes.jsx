import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../components/Root";
import MainLayout from '../Layout/MainLayout';
import Login from "../components/Login";
import ErrorPage from "../components/ErrorPage";
import SignUp from "../components/SignUp";
import ShareGardenTip from "../components/ShareGardenTip";
import BrowseTips from "../components/BrowseTips";
import TipDetails from "../components/TipDetails";
import MyTips from "../components/MyTips";
import ExploreGardenersPage from "../components/ExploreGardenersPage";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <SignUp />
      },
      {
        path: "gardenTip",
        element: (
          <PrivateRoute>
            <ShareGardenTip />
          </PrivateRoute>
        )
      },
      {
        path: "browseTips",
        element: <BrowseTips />
      },
      {
        path: "tip/:id",
        element: (
          <PrivateRoute>
            <TipDetails />
          </PrivateRoute>
        )
      },
      {
        path: "my-tips",
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        )
      },
      {
        path: "gardeners-all",
        element: <ExploreGardenersPage />
      }
    ],
  },
]);
