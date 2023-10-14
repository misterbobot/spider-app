import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import {AllServicesPage, ChooseServicePage, OfflinePage} from "../pages/services";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
        path: "/services",
        element: <AllServicesPage />,
    },
    {
        path: "/choose-service",
        element: <ChooseServicePage />,
    },
    {
        path: "/service/offline",
        element: <OfflinePage />,
    },
    {
        path: "/service/online",
        element: <ChooseServicePage />,
    },
  ]);