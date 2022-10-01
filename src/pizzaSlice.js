import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: ["pepperoni"],
  glutten: true,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.glutten = !state.glutten;
    },
    addTopping: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },
    resetTopping: (state) => {
      state.toppings = [];
    },
  },
});

export const { toggleGluten, addTopping, resetTopping } = pizzaSlice.actions;

export default pizzaSlice.reducer;
