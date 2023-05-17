import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hello from "../components/Hello";

const RootRoutes = () => {
  const rootRouter = createBrowserRouter([
    {
      path: "/",
      element: <Hello />,
    },
  ]);

  return <RouterProvider router={rootRouter} />;
};

export default RootRoutes;
