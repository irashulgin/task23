import { FC } from "react";
import React from "react";
import styleCss from "./book-list-item.module.css";
import { useAppDispatch, useAppSelector, wishlistActions } from "../../store";
import { getWishListData } from "../../actions/wishlist.actions";
import { PRODUCT } from "../../interfaces";

interface BookListItemProps {
  item: PRODUCT;
}

export const BookListItem: FC<BookListItemProps> = (
  props: BookListItemProps
) => {
  const dispatch = useAppDispatch();
  const wishList = useAppSelector(getWishListData);
  const { item } = props;
  const { image, rating, description, price, name, reviews = [] } = item;
  const updateWishList = () => {
    if (!wishList.includes(item)) {
      dispatch(wishlistActions.updateData({ item }));
    } else {
      dispatch(wishlistActions.removeFromList({ item }));
    }
  };
  const isFavorite = () => {
    return wishList.find((product: PRODUCT) => product.id == item.id);
  };

  const drawRating = () => {
    let res = "";
    for (let i = 0; i < rating; i++) {
      res += "*";
    }
    return res;
  };

  return (
    <section className={styleCss["wrapper"]}>
      <main className={styleCss["like"]}>
        <h3 onClick={updateWishList}>
          {!isFavorite() ? (
            <i className="bi bi-heart"></i>
          ) : (
            <i className="bi bi-heart-fill"></i>
          )}
        </h3>
      </main>
      <img src={image} className={styleCss["wrapper-img"]} alt="" />
      <p> {`${price}$`}</p>
      <p className={styleCss["rating"]}>{rating > 0 && drawRating()}</p>
      <strong>{name}</strong>
      <hr className="solid"></hr>
      <strong>{description}</strong>
      {reviews.length > 0 && (
        <span> {Array.isArray(reviews) && reviews.join(",")}</span>
      )}
    </section>
  );
};
