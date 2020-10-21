import { useState } from "react";

const useModal = () => {
  const [isShowing1, setIsShowing1] = useState(false);
  const [isShowing2, setIsShowing2] = useState(false);

  function toggle1() {
    setIsShowing1(!isShowing1);
  }
  function toggle2() {
    setIsShowing2(!isShowing2);
  }

  return {
    isShowing1,
    isShowing2,
    toggle1,
    toggle2,
  };
};

export default useModal;
