import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../components/Root";
import MainLayout from "../Layout/MainLayout";
import Login from "../components/Login";
import ErrorPage from "../components/ErrorPage";
import SignUp from "../components/SignUp";
import ShareGardenTip from "../components/ShareGardenTip";
import BrowseTips from "../components/BrowseTips";
import TipDetails from "../components/TipDetails";
import MyTips from "../components/MyTips";
import ExploreGardenersPage from "../components/ExploreGardenersPage";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardOverview from "../components/DashboardOverview";
import CategoryTips from "../components/CategoryTips";

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
        element: <Login />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      
      {
        path: "browseTips",
        element: <BrowseTips />,
      },
      {
        path: "tip/:id",
        element: (
          <PrivateRoute>
            <TipDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:name",
        element: <CategoryTips></CategoryTips>,
      },
      

      {
        path: "gardeners-all",
        element: <ExploreGardenersPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardOverview />,
      },
      {
        path: "my-tips",
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
      },
      {
        path: "gardenTip",
        element: (
          <PrivateRoute>
            <ShareGardenTip />
          </PrivateRoute>
        ),
      },
      {
        path: "tip/:id",
        element: (
          <PrivateRoute>
            <TipDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "browseTips",
        element: <BrowseTips />,
      },
    ],
  },
]);
