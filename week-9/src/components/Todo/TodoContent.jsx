export function TodoContent({ loading, title }) {
  return <div>{loading ? "Loading..." : title}</div>;
}
