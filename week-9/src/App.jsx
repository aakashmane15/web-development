import { useState } from "react";
import { TodoPage } from "./components/Todo/TodoPage";
import { Counter } from "./components/Counter/Counter";
import { ToggleMessage } from "./components/Toggle/ToggleMessage";
import { PostsFeed } from "./components/Posts/PostsFeed";
import { CardUse } from "./components/Card/CardUse";

function App() {
  const [view, setView] = useState("todo");

  return (
    <div>
      <button onClick={() => setView("todo")}>Todo</button>
      <button onClick={() => setView("counter")}>Counter</button>
      <button onClick={() => setView("toggle")}>Toggle</button>
      <button onClick={() => setView("posts")}>Posts</button>
      <button onClick={() => setView("card")}>Cards</button>

      <hr />

      {view === "todo" && <TodoPage />}
      {view === "counter" && <Counter />}
      {view === "toggle" && <ToggleMessage />}
      {view === "posts" && <PostsFeed />}
      {view === "card" && <CardUse />}
    </div>
  );
}

export default App;
