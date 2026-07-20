import { useState } from "react";
import AppRouter from "./router/AppRouter";
import { LightBulb } from "./pages/LightBulb";

function App() {
  const [view, setView] = useState("router");

  return (
    <div>
      <div>
        <button onClick={() => setView("router")}>Routers</button>
        <button onClick={() => setView("lightBulb")}>Light Bulb</button>
      </div>

      <hr />

      <div>
        {view === "router" && <AppRouter />}
        {view === "lightBulb" && <LightBulb />}
      </div>
    </div>
  );
}

export default App;
