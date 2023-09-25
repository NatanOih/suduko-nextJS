import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.msMaxTouchPoints;
      const isMobileUserAgent =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isTouchDevice || isMobileUserAgent);
    };

    checkIfMobile();

    // Add a resize listener to re-check on screen size changes
    window.addEventListener("resize", checkIfMobile);

    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
