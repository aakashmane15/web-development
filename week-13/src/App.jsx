import { useState } from "react";
import { Grid } from "./components/Grid";

function App() {
  const [view, setView] = useState("");

  return (
    <>
      <div>
        <button onClick={() => setView("grid")}>Grid</button>
      </div>
      <hr />
      <div>
        {view === "grid" && (
          <>
            <Grid />
          </>
        )}
      </div>
    </>
  );
}

export default App;
