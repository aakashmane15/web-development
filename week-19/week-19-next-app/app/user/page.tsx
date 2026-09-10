import axios from "axios";

export default async function User() {
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",
  );
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
