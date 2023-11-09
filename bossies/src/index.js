import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../src/App.css";
import App from "./App.js";
import About from "./routes/About.js";
import Qa from "./routes/Qa.js";
import Contact from "./routes/Contact.js";
import WineBottle from "./routes/WineBottle.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Qa",
    element: <Qa />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/wineBottle",
    element: <WineBottle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
