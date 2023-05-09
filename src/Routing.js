import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import UserPage from "./pages/UserPage/UserPage";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";

const Routing = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 1,
    },
    {
      link: "/",
      element: <ProductsPage />,
      id: 4,
    },
    {
      link: "/user",
      element: <UserPage />,
      id: 5,
    },
    {
      link: "/products/:id",
      element: <Details />,
      id: 5,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 6,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default Routing;
