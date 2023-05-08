import { STORE } from "../interfaces";

export const getWishListData = (state: STORE) => state.wishList.data;
export const getWishListVisible = (state: STORE) => state.wishList.visible;
