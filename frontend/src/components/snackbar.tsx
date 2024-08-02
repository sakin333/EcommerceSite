import React, { useState, useEffect } from "react";

interface SnackbarProps {
  title: string;
  description: string;
  variant: string;
  duration?: number; //duartion in miliseconds
}

const Snackbar: React.FC<SnackbarProps> = ({
  title,
  description,
  variant,
  duration = 3000,
}) => {
  const [visible, setVisible] = useState(true);

  //   useEffect(() => {
  //     setVisible(true);
  //     const timer = setTimeout(() => {
  //       setVisible(false);
  //     }, duration);

  //     return () => clearTimeout(timer);
  //   }, [message, duration]);

  return (
    <div
      className={`fixed bottom-4 right-4 w-[320px] px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Snackbar;
