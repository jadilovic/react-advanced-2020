import React from "react";

const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    const items = state.cart;
    const newCart = items.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === "INCREASE" || action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          if (action.type === "INCREASE") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          } else {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (carTotal, carItem) => {
        const { price, amount } = carItem;
        carTotal.amount += amount;
        const itemTotal = price * amount;
        carTotal.total += itemTotal;
        return carTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }
  throw new Error("no matching action type");
};

export default reducer;
