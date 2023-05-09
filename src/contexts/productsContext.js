import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const API = "http://localhost:8000/products";

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    const { data } = await axios(`${API}/${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  }

  async function getOneProduct(id) {
    let res = await fetch(`${API}/${id}`);
    const data = await res.json();
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        getProducts: getProducts,
        getOneProduct: getOneProduct,
      }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductContextProvider;
