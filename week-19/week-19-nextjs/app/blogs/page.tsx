import axios from "axios";

async function getBlogs() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return response.data;
}

export default async function blogs() {
  const blogs = await getBlogs();

  return (
    <>
      <div>{JSON.stringify(blogs)}</div>
    </>
  );
}

interface ITodo {
  title: string;
  completed: boolean;
}

function Todo({ title, completed }: ITodo) {
  return (
    <>
      <div>
        {title} {completed ? "The todo is completed" : "The todo is incomplete"}
      </div>
    </>
  );
}
