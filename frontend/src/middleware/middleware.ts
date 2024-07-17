import { Middleware } from "@reduxjs/toolkit";

const localStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    const state = getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
    return result;
  };
};

export default localStorageMiddleware;
