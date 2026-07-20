import { memo } from "react";
import { useCounter } from "../hooks/useCounter";
import { countAtom } from "../store/atoms/countAtom";
import { DefaultValue, useRecoilValue } from "recoil";

const CurrentCount = memo(({ count }) => {
  return (
    <>
      <div>{count}</div>
    </>
  );
});

export function Counter() {
  const { count, increaseCount, decreaseCount, resetCount } = useCounter();

  return (
    <>
      <div>
        <CurrentCount count={count} />
      </div>
      <div>
        <button onClick={increaseCount}>Increase</button>
        <br />
        <button onClick={resetCount}>Reset</button>
        <br />
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </>
  );
}
