import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT } from "../../../interfaces";

const getLocalData = () => {
try {
  if(localStorage.getItem("wishList")) {
    return JSON.parse(localStorage.getItem("wishList")!);
  } 
}
catch(e) {
  console.log(e);
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
      try {
        localStorage.setItem("wishList", JSON.stringify(data));
      } catch(e) {
        console.log(e);
      }
    },
    removeAllFromList(state) {
      state.data = [];
      try {
        localStorage.setItem("wishList", "");
      } catch(e) {
        console.log(e);
      }
    },
    removeFromList(state, action) {
      const data = JSON.parse(JSON.stringify(state.data)).filter(
        (item: PRODUCT) => item.id != action.payload.item.id
      );
      state.data = data;
      try {
        localStorage.setItem("wishList", JSON.stringify(data));
      } catch(e) {
        console.log(e);
      }
    },
    updateVisible(state, action) {
      state.visible = action.payload;
    },
  },
});
export const wishlistActions = wishlist.actions;
