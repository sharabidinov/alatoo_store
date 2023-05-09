import React from "react";
import Routing from "./Routing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <ProductContextProvider>
          <Navbar />
          <Routing />
          <Footer />
        </ProductContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
