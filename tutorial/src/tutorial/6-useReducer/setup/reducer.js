// reducer function
export const reducer = (state, action) => {
  console.log(state);
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "added item",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please enter some value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
      modalContent: "",
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const id = action.payload;
    const newPeople = [...state.people].filter((person) => person.id !== id);
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "removed item",
    };
  }

  throw new Error("no matching action type");
};
