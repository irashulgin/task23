import React from "react";
import "./App.css";
import { Products } from "./components/products/products";
import { Wishlist } from "./components/wishlist/wishlist";
import { Header } from "./components/header/header";
import { useAppSelector } from "./store";
import { getWishListVisible } from "./actions/wishlist.actions";

function App() {
  const wishListVisible = useAppSelector(getWishListVisible);
  return (
    <div className="App">
      <Header />
      {wishListVisible ? <Wishlist /> : <Products />}
    </div>
  );
}

export default App;
