import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import usersData from "../../usersData";
import * as types from "./type";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: usersData,
  },

  reducers: {
    addNewUser: (state, action: PayloadAction<types.addUser>) => {
      state.value = [
        ...state.value,
        {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          favorites: [],
          status: true,
          img: "",
          cart: [],
          active: [],
        },
      ];
    },
    setUserInfo: (state, action) => {
      state.value.find((el) => {
        if (el.email === action.payload.email) {
          el.name = action.payload.name;
          el.favorites = action.payload.favorites;
          el.cart = action.payload.cart;
          el.img = action.payload.img;
          el.status = false;
          el.active = action.payload.active;
        }

        return "";
      });
    },
    changePass: (state, action) => {
      state.value.find((el) => {
        if (el.email === action.payload.email) {
          el.password = action.payload.password;
        }

        return "";
      });
    },
  },
});

export const { addNewUser, setUserInfo, changePass } = usersSlice.actions;

export default usersSlice.reducer;
