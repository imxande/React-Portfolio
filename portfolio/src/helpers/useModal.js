import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle1() {
    setIsShowing(!isShowing);
  }
  function toggle2() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle1,
    toggle2,
  };
};

export default useModal;
