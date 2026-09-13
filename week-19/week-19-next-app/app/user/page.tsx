import axios from "axios";

export default async function User() {
  const response = await axios.get(
    "http://localhost:3000/api/v1/users/details",
  );

  await new Promise((resolve) => setTimeout(resolve, 5000));

  const data = response.data;

  return (
    <>
      <div>
        <h1>This is a User page</h1>
      </div>
      <div>
        {data.name};
        <br />
        {data.email};
      </div>
    </>
  );
}
