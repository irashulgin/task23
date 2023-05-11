import { FC, useCallback } from "react";
import React from "react";
import styleCss from "./header.module.css";
import { useAppDispatch, wishlistActions, useAppSelector } from "../../store";
import { updateProducts } from "../../actions/products.actions";
import { debounce } from "lodash";
import { Button } from "react-bootstrap";
import { getWishListVisible } from "../../actions/wishlist.actions";

export const Header: FC = () => {
  const wishListVisible = useAppSelector(getWishListVisible);
  const dispatch = useAppDispatch();
  const debounceSendRequest = useCallback(
    debounce((filter: string) => dispatch(updateProducts(filter)), 500),
    []
  );
  const filterItems = (item: string) => {
    debounceSendRequest(item);
  };
  const selectView = () => {
    dispatch(wishlistActions.updateVisible(!wishListVisible));
  };
  const clearList = () => {
    dispatch(wishlistActions.removeAllFromList());
  };
  return (
    <header className={styleCss["header-wrapper"]}>
      <div className={styleCss["left-wrapper"]}>
        <Button onClick={selectView} name="show list">
          {!wishListVisible
            ? `Show products in your wishlist`
            : `Show all products`}{" "}
        </Button>
      </div>
      <div className={styleCss["break-row"]}></div>

      {!wishListVisible ? (
        <h6 className={styleCss["search-wrapper"]}>
          <input
            id="namedInput"
            type="text"
            placeholder="Looking by name..."
            aria-label="Looking by name..."
            name="search"
            onChange={(e) => filterItems(e.target.value)}
          />
        </h6>
      ) : (
        <>
          <Button onClick={clearList} name="clearList">
            Remove all
          </Button>
        </>
      )}
    </header>
  );
};
