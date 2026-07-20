import { useContext } from "react";
import { BulbContext } from "../context/BulbContext";

export function ToggleBulb() {
  const { bulbState, setBulbState } = useContext(BulbContext);

  function toggleBulbState() {
    setBulbState(!bulbState);
  }

  return (
    <>
      <div>
        <button onClick={toggleBulbState}>Toggle Bulb</button>
      </div>
    </>
  );
}
