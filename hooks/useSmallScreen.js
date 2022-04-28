import { useState, useEffect } from "react";

export default () => {
  const mobileMinScreenSize = 0;
  const mobileMaximumScreenSize = 992;

  const getScreenSize = () => {
    if (process.browser) {  
    return (
      window.innerWidth > mobileMinScreenSize &&
      window.innerWidth <= mobileMaximumScreenSize
    );
  };
}

  const [isSmallScreen, setIsSmallScreen] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(getScreenSize());
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
};
