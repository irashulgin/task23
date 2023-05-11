import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT } from "../../../interfaces";

const getLocalData = () => {
if(localStorage.getItem("wishList")) {
  return JSON.parse(localStorage.getItem("wishList")!);
}
return [];
};
const initialState: {
  data: PRODUCT[];
  visible: boolean;
} = {
  data: getLocalData(),
  visible: false,
};

export const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    updateData(state, action) {
      state.data.push(action.payload.item);
      const data = JSON.parse(JSON.stringify(state.data));
      localStorage.setItem("wishList", JSON.stringify(data));
    },
    removeAllFromList(state) {
      state.data = [];
      localStorage.setItem("wishList", "");
    },
    removeFromList(state, action) {
      const data = JSON.parse(JSON.stringify(state.data)).filter(
        (item: PRODUCT) => item.id != action.payload.item.id
      );
      state.data = data;
      localStorage.setItem("wishList", JSON.stringify(data));
    },
    updateVisible(state, action) {
      state.visible = action.payload;
    },
  },
});
export const wishlistActions = wishlist.actions;
