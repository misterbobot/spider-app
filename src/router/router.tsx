import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import {AllServicesPage, ChooseServicePage, OfflinePage} from "../pages/services";
import {ChatPage} from "../pages/services/chat";
import { Map } from "../components/map";

export const router = createBrowserRouter([
    {
        path: "/services",
        element: <AllServicesPage />,
    },
    {
        path: "/services/:id/choose-service",
        element: <ChooseServicePage />,
    },
    {
        path: "/services/:id/offline",
        element: <OfflinePage />,
    },
    {
        path: "/service/online",
        element: <ChooseServicePage />,
    },
    {
        path: "/injectable",
        element: <Map isInjected />,
    },
    {
      path: "*",
      element: <HomePage />,
    },
    {
        path: "/chat",
        element: <ChatPage />,
    },
  ]);