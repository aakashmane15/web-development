import { useRef } from "react";

export function useDebounce(originalFunction) {
  const currentClock = useRef();

  function debouncedFunction() {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFunction, 200);
  }

  return debouncedFunction;
}
