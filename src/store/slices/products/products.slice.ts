import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT } from "../../../interfaces";

const initialState: {
  data: null | PRODUCT[];
  isValid: boolean;
} = {
  data: null,
  isValid: false,
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateData(state, action) {
      state.data = action.payload;
      state.isValid = true;
    },

    updateIsValid(state, action) {
      state.isValid = action.payload;
    },
  },
});
export const productsActions = products.actions;
