import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addFavoriteShoe,
  deleteFavoriteShoe,
} from "../../store/account-sclice/accountSlice";

import "./FavoriteIcon.css";

type favoriteIconProps = {
  name: string;
  price: number;
  shoeSize: number | null;
  id: number;
  count: number;
  totalPrice: number;
  img: string;
};

const FavoriteIcon: React.FC<favoriteIconProps> = ({
  id,
  price,
  shoeSize,
  count,
  totalPrice,
  name,
  img,
}) => {
  const favourites = useAppSelector((state) => state.account.value.favorites);
  const isFavourite = favourites.filter((el) => el.id === id);
  const dicpatch = useAppDispatch();

  const add = () => {
    dicpatch(
      addFavoriteShoe({ name, price, shoeSize, id, count, totalPrice, img })
    );
  };

  const del = () => {
    dicpatch(deleteFavoriteShoe(id));
  };

  return (
    <img
      onClick={isFavourite.length > 0 ? del : add}
      className="favouriteIcon"
      src={
        isFavourite.length > 0
          ? require("../../../src/svg/heart-red.svg").default
          : require("../../../src/svg/heart-white.svg").default
      }
      width="20"
      alt="img"
    ></img>
  );
};

export default FavoriteIcon;
