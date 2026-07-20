import { useState } from "react";
import { Bulb } from "../components/Bulb";
import { ToggleBulb } from "../components/ToggleBulb";
import { BulbContext } from "../context/BulbContext";

export function LightBulb() {
  const [bulbState, setBulbState] = useState(true);

  return (
    <div>
      <BulbContext.Provider
        value={{
          bulbState: bulbState,
          setBulbState: setBulbState,
        }}
      >
        <Bulb />
        <ToggleBulb />
      </BulbContext.Provider>
    </div>
  );
}
