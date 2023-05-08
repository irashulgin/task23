import { FC } from "react";
import React from "react";
import { useAppSelector } from "../../store/store";
import { getWishListData } from "../../actions/wishlist.actions";
import { BookListItem } from "../book-list-item/book-list-item";
import styleCss from "../products/products.module.css";
import { PRODUCT } from "../../interfaces";

export const Wishlist: FC = () => {
  const wishlistData = useAppSelector(getWishListData);

  return (
    <>
      <div className={styleCss["wrapper"]}>
        {wishlistData ? (
          wishlistData.map((item: PRODUCT, index: number) => (
            <div className={styleCss.card} key={item.id + index}>
              <BookListItem item={item} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
