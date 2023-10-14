import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import {AllServicesPage} from "../pages/services";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
        path: "/services",
        element: <AllServicesPage />,
    },
  ]);