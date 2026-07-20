import { useContext } from "react";
import { BulbContext } from "../context/BulbContext";

export function Bulb() {
  const { bulbState } = useContext(BulbContext);
  return (
    <>
      <div>{bulbState ? "Bulb is on" : "Bulb is off"}</div>
    </>
  );
}
