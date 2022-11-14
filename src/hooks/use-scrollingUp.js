import { useEffect, useState } from "react";

const useScrollingUp = (offset = 0) => {
  const isBrowser = typeof window !== "undefined";
  let prevScroll;
  if (isBrowser) {
    prevScroll = window.pageYOffset;
  }

  const [scrollingUp, setScrollingUp] = useState(true);

  const handleScroll = () => {
    const currScroll = isBrowser && window.pageYOffset;
    if (currScroll > offset) {
      const isScrolled = isBrowser && prevScroll > currScroll;
      setScrollingUp(isScrolled);
    }
    if (currScroll < offset && !scrollingUp) {
      setScrollingUp(true);
    }
    prevScroll = currScroll;
  };

  useEffect(() => {
    if (isBrowser) window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (isBrowser) window.removeEventListener("scroll", handleScroll, { passive: true });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return scrollingUp;
};

export default useScrollingUp;
