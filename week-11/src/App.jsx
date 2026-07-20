import { useState } from "react";
import { Counter } from "./components/Counter";
import { Post } from "./components/Post";
import { Search } from "./components/Search";
import { RecoilRoot } from "recoil";

function App() {
  const [view, setView] = useState("");

  return (
    <>
      <RecoilRoot>
        <div>
          <button onClick={() => setView("counter")}>Counter</button>
          <button onClick={() => setView("post")}>Post</button>
          <button onClick={() => setView("search")}>Search</button>
        </div>

        <hr />

        <div>
          {view === "counter" && (
            <>
              <Counter />
            </>
          )}
          {view === "post" && (
            <>
              <Post />
            </>
          )}
          {view === "search" && (
            <>
              <Search />
            </>
          )}
        </div>
      </RecoilRoot>
    </>
  );
}
export default App;
