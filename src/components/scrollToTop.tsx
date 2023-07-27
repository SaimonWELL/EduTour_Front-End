import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

interface props {
    children : ReactNode
}

const ScrollToTop = ({children} : props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>
};

export default ScrollToTop;