import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component automatically scrolls the window to the top whenever the page's path changes.
export default function ScrollToTop() {
  // `useLocation`returns the current location object, We destructure it to get the `pathname`, which is the part of the URL after the domain.
  const { pathname } = useLocation();

  useEffect(() => {
    // `window.scrollTo(0, 0)` scrolls the browser window to the top-left corner.
    window.scrollTo(0, 0);
  }, [pathname]); // The effect's dependency array. This tells React to re-run the effect only when the `pathname` changes.
  return null;
}