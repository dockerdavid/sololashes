import { createBrowserRouter } from "react-router-dom";

import { HomePage, ErrorPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
