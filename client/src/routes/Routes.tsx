import { Navigate, createBrowserRouter } from "react-router-dom";
import { CompleteOrderPage } from "../pages/CompleteOrder";
import AboutPage from "../pages/AboutPage";
import ServerError from "../pages/ServerError";
import ProductDetails from "../pages/Catalog/components/ProductDetails";
import NotFound from "../pages/NotFound";
import App from "../App";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import { OurProducts } from "../pages/Catalog/components/OurProducts";
import RequireAuth from "./RequireAuth";
import Orders from "../pages/Orders";
import CheckoutPage from "../pages/CheckoutPage";
import CheckoutWrapper from "../pages/CheckoutPage/components/CheckoutWrapper";
import Inventory from "../pages/Admin/Inventory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // authenticated routes
      {
        element: <RequireAuth />, children: [
          { path: 'checkout', element: <CheckoutWrapper /> },
          { path: 'orders', element: <Orders /> },
        ]
      },
      // admin routes
      {
        element: <RequireAuth roles={['Admin']} />, children: [
          { path: 'inventory', element: <Inventory /> },
        ]
      },
      { path: "about", element: <AboutPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "catalog", element: <OurProducts /> },
      { path: "completeOrder", element: <CompleteOrderPage /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to='/not-found' /> }
    ]
  },
]);




