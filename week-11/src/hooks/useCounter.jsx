import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/countAtom";

export function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  function decreaseCount() {
    setCount((c) => c - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return {
    count: count,
    increaseCount: increaseCount,
    decreaseCount: decreaseCount,
    resetCount: resetCount,
  };
}
