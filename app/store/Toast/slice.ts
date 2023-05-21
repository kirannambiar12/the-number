import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ToastInfo, ToastInfoTypes } from "./type";

export const initialState: ToastInfoTypes = {
  toastInfo: {
    message: "",
    type: undefined,
  },
};

const globalSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    displayToast(state, action: PayloadAction<ToastInfo>) {
      state.toastInfo.message = action.payload.message;
      state.toastInfo.type = action.payload.type;
    },
    closeToast(state) {
      state.toastInfo.message = "";
      state.toastInfo.type = undefined;
    },
  },
});

export const {
  actions: toastActions,
  reducer: toastReducer,
  name: sliceKey,
} = globalSlice;
