import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export function Post() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost,
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <button onClick={() => setCurrentPost(1)}>Post 1</button>
        <button onClick={() => setCurrentPost(2)}>Post 2</button>
        <button onClick={() => setCurrentPost(3)}>Post 3</button>
      </div>
      <div>{JSON.stringify(finalData)}</div>
    </>
  );
}
