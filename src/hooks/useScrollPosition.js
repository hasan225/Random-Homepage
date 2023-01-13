import React, { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPostion, setScrollPosition] = useState(0);

  useEffect(() => {
    const upDatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", upDatePosition);
    upDatePosition();
    return () => window.removeEventListener("scroll", upDatePosition);
  }, []);
  return scrollPostion;
};

export default useScrollPosition;
