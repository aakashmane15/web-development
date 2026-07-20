import { useState } from "react";
import { PostComponent } from "./Post";

export function PostsFeed() {
  const [posts, setPosts] = useState([]);

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Aakash",
        subtitle: "Random Subtitle",
        time: "2m Ago",
        image: "https://picsum.photos/200",
        description: "Random Description",
      },
    ]);
  }

  function removePost() {
    setPosts(posts.slice(0, -1));
  }

  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      <button onClick={removePost}>Remove Post</button>

      {posts.map((post, index) => (
        <PostComponent key={index} {...post} />
      ))}
    </div>
  );
}
