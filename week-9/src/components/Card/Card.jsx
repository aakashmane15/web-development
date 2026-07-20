export function Card({ children }) {
  return (
    <div
      style={{
        background: "black",
        borderRadius: 10,
        color: "white",
        padding: 10,
        margin: 10,
      }}
    >
      <div>Above the children</div>
      <div>{children}</div>
      <div>Below the children</div>
    </div>
  );
}
