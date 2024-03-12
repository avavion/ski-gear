import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import ProductPage from "../pages/ProductPage";
import BusketPage from "../pages/BusketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "/catalog/:productId",
        element: <ProductPage />,
      },
      {
        path: "/busket",
        element: <BusketPage />,
      },
    ],
  },
]);

export default router;
