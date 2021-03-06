import React, { useState, useContext, useReducer, useEffect } from "react";
// import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

// REDUCE EXERCISE
const staff = [
  { name: "bob", age: 33, position: "worker", salary: 234 },
  { name: "boam", age: 73, position: "work", salary: 24 },
  { name: "wsbob", age: 53, position: "eeerker", salary: 534 },
  { name: "ddbob", age: 23, position: "3orker", salary: 134 },
];

const totalSalary = staff.reduce((total, person) => {
  console.log(total);
  total += person.salary;
  return total;
}, 0);
console.log(totalSalary);

// REDUCE EXERCISE
const phones = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel ",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 3,
  },
  {
    title: "LGX BE 2",
    price: 399.99,
    amount: 4,
  },
];

let totalData = phones.reduce(
  (state, phone) => {
    const { price, amount } = phone;
    state.amount += amount;
    const totalPrice = amount * price;
    state.price += totalPrice;
    return state;
  },
  { price: 0, amount: 0 }
);
totalData.price = parseFloat(totalData.price.toFixed(2));

console.log("phones " + totalData.amount + " " + totalData.price);

// REDUCE EXERCISE
const url2 = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchData = async () => {
  const response = await fetch(url2);
  const data = await response.json();
  const newData = data.reduce((total, item) => {
    const { language } = item;
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetchData();

// PHONE PROJECT

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  const fetchPhones = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
