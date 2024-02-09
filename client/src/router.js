import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Callback from "./Callback";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/callback", // google will redirect here
    element: <Callback />,
  },
]);
