import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayouts from "./layouts/RootLayouts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    element: <div>Hello World</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
