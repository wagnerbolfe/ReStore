import { Navigate, createBrowserRouter } from "react-router-dom";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Catalog";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";
import AboutPage from "./pages/AboutPage";
import ServerError from "./pages/ServerError";
import ProductDetails from "./pages/Catalog/components/ProductDetails";
import NotFound from "./pages/NotFound";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/completeOrder", element: <CompleteOrderPage /> },
      { path: "/orderConfirmed", element: <OrderConfirmedPage /> },
      { path: "/server-error", element: <ServerError /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to='/not-found' /> }
    ]
  },
]);




