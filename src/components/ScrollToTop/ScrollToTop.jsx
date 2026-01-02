import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Access the current location (URL path)
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the absolute top-left of the window
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers every time the URL path changes

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;