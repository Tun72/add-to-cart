import { useEffect, useRef } from "react";

export function useOutsideClick(handler) {
  const ref = useRef();
  console.log("Hello");
  useEffect(() => {
    function handelClick(e) {
      console.log("Hello");
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
        console.log("Hello");
      }
    }

    document.addEventListener("click", handelClick, true);

    return () => document.removeEventListener("click", handelClick, true);
  }, [handler]);

  return ref;
}
