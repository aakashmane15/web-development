import axios from "axios";

export default async function Blogs({ params }: any) {
  const { postId } = await params;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );

  const data = response.data;

  return (
    <>
      <div>
        <h1>Blog {data.userId}</h1>
      </div>
      <div>
        ID: {data.id}
        <br />
        Title: {data.title}
        <br />
        Body: {data.body}
      </div>
    </>
  );
}
