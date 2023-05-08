import { STORE } from "../interfaces";
import { productsActions } from "../store";

export const getProducts = async (filter?: string) => {
  let URL = `${"http://localhost:3000/products"}`;
  try {
    if (filter) {
      URL = `${URL}?name_like=${filter}`;
    }
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log("Unexpected error", err);
    }
  }
};

export const updateProducts = (filter?: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      const products = await getProducts(filter);
      if (products) {
        dispatch(productsActions.updateData(products));
        dispatch(productsActions.updateIsValid({ isValid: true }));
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Unexpected error", err);
      }
    }
  };
};

export const getProductsValid = (state: STORE) => state.products.isValid;

export const getProductsData = (state: STORE) => state.products.data;
