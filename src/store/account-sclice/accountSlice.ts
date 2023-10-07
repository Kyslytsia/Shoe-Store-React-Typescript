import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import * as types from "./type";

const initialState: types.State = {
  value: {
    name: "",
    email: "",
    favorites: [],
    status: false,
    img: "",
    cart: [],
    active: [],
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,

  reducers: {
    login: (state, action: PayloadAction<types.LoginProps>) => {
      state.value = {
        name: action.payload.name,
        email: action.payload.email,
        favorites: action.payload.favorites,
        status: true,
        img: action.payload.img,
        cart: action.payload.cart,
        active: action.payload.active,
      };
    },
    logout: (state) => {
      state.value = {
        name: "",
        email: "",
        favorites: [],
        status: false,
        img: "",
        cart: [],
        active: [],
      };
    },
    countPlus: (state, action: PayloadAction<types.CountProps>) => {
      state.value.cart.map((el) => {
        if (
          el.id === action.payload.id &&
          el.shoeSize === action.payload.shoeSize
        ) {
          el.count = ++action.payload.count;
          el.totalPrice = el.price * action.payload.count;
        }

        return "";
      });
    },
    countMinus: (state, action: PayloadAction<types.CountProps>) => {
      state.value.cart.map((el) => {
        if (
          el.id === action.payload.id &&
          el.shoeSize === action.payload.shoeSize
        ) {
          el.count = --action.payload.count;
          el.totalPrice = el.price * action.payload.count;
        }

        return "";
      });
    },
    addShoeInCart: (state, action: PayloadAction<types.ShoeDataProps>) => {
      if (!state.value.cart.includes(action.payload)) {
        state.value.cart.push(action.payload);
      }
    },
    deleteShoeInCart: (
      state,
      action: PayloadAction<types.DeleteShoeInCartProps>
    ) => {
      state.value.cart = state.value.cart.filter(
        (el) =>
          el.shoeSize !== action.payload.shoeSize || el.id !== action.payload.id
      );
    },
    addFavoriteShoe: (state, action: PayloadAction<types.ShoeDataProps>) => {
      if (!state.value.favorites.includes(action.payload)) {
        state.value.favorites.push(action.payload);
      }
    },
    deleteFavoriteShoe: (state, action) => {
      state.value.favorites = state.value.favorites.filter(
        (el) => el.id !== action.payload
      );
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.value.img = action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.value.name = action.payload;
    },
    addShoeInActive: (state, action: PayloadAction<types.ShoeDataProps[]>) => {
      state.value.active = state.value.active.concat(action.payload);
      state.value.cart = [];
    },
  },
});

export const {
  login,
  logout,
  setImage,
  countPlus,
  countMinus,
  changeName,
  addShoeInCart,
  addShoeInActive,
  addFavoriteShoe,
  deleteShoeInCart,
  deleteFavoriteShoe,
} = accountSlice.actions;

export default accountSlice.reducer;
