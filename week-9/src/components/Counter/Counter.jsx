import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  useEffect(() => {
    const interval = setInterval(increaseCount, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return <h2>{count}</h2>;
}
