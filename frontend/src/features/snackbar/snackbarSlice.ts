import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SnackbarState = {
  isShown: boolean;
  title: string;
  description: string;
  variant: "success" | "error" | "default";
};

const initialState: SnackbarState = {
  isShown: false,
  title: "",
  description: "",
  variant: "default",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        variant: "success" | "error" | "default";
      }>
    ) => {
      state.isShown = true;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.variant = action.payload.variant;
    },
    hideSnackbar: (state) => {
      state.isShown = false;
      state.title = "";
      state.description = "";
      state.variant = "default";
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
