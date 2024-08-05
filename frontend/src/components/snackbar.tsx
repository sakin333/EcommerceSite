import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { hideSnackbar } from "../features/snackbar/snackbarSlice";

// interface SnackbarProps {
//   title: string;
//   description: string;
//   variant: "success" | "error" | "default";
//   duration?: number; //duartion in miliseconds
//   onClose?: () => void;
// }

const Snackbar = () => {
  const dispatch = useAppDispatch();
  const { isShown, title, description, variant } = useAppSelector(
    (state) => state.snackbar
  );

  useEffect(() => {
    if (isShown) {
      const timer = setTimeout(() => {
        dispatch(hideSnackbar());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isShown, dispatch]);

  const variantClass = {
    success: "bg-green-600/90",
    error: "bg-red-600/90",
    default: "bg-gray-600/90",
  }[variant];

  return (
    <div
      className={`fixed bottom-4 right-4 w-[320px] px-4 py-2 text-white rounded-lg shadow-lg transition-opacity duration-300 ${
        isShown ? "opacity-100" : "opacity-0"
      } ${variantClass}`}
    >
      <h1 className="text-base md:text-lg font-semibold">{title}</h1>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

export default Snackbar;
