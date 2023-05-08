import React from "react";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  getProductsData,
  getProductsValid,
  updateProducts,
} from "../../actions/products.actions";
import { BookListItem } from "../book-list-item/book-list-item";
import styleCss from "./products.module.css";
import { PRODUCT } from "../../interfaces";

export const Products: FC = () => {
  const dispatch = useAppDispatch();
  const valid = useAppSelector(getProductsValid);
  const productsData = useAppSelector(getProductsData);

  useEffect(() => {
    if (!valid) {
      dispatch(updateProducts());
    }
  }, [valid]);

  if (!valid) return <>Loading...</>;
  return (
    <>
      <section className={styleCss["wrapper"]}>
        {productsData &&
          productsData.map((item: PRODUCT, index: number) => (
            <div className={styleCss.card} key={item.id + index}>
              <BookListItem item={item} />
            </div>
          ))}
      </section>
    </>
  );
};
