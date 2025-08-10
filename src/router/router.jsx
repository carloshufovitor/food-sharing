import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/Private Page/AddFood";
import MyFoodRequest from "../pages/Private Page/MyFoodRequest";
import ManageMyFoods from "../pages/Private Page/ManageMyFoods";
import FeaturedFoods from "../pages/Home/FeaturedFoods";
import AvailableFoods from "../pages/Home/AvailableFoods";
import FoodDetails from "../pages/Home/FoodDetails";
import UpdatedFoodDetails from "../pages/Home/UpdatedFoodDetails";
import PrivacyPolicy from "../pages/Policy/PrivacyPolicy";
import TermsAndConditions from "../pages/Policy/TermsAndConditions";
import ContactUs from "../pages/Policy/ContactUs";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        // loader: () => fetch("https://gardening-community-server-kappa.vercel.app/gardeners"),
        Component: Home,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-food-request",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://food-sharing-website-server-lovat.vercel.app/requested-food"
          ),
      },

      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://food-sharing-website-server-lovat.vercel.app/manage-my-foods"
          ),
      },
      {
        path: "/food-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://food-sharing-website-server-lovat.vercel.app/food-details/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://food-sharing-website-server-lovat.vercel.app/manage-my-foods/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdatedFoodDetails></UpdatedFoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/featured-foods",
        Component: FeaturedFoods,
      },
      {
        path: "/available-foods",
        Component: AvailableFoods,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/terms-and-condition",
        Component: TermsAndConditions,
      },
      {
        path: "/contact-us",
        Component: ContactUs,
      },
    ],
  },
]);
export default router;
