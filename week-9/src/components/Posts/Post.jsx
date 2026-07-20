export function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div
      style={{
        width: 200,
        backgroundColor: "white",
        borderRadius: 10,
        border: "1px solid gray",
        marginTop: 20,
        padding: 20,
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src={image}
          alt="Profile"
          style={{ width: 30, height: 30, borderRadius: 20 }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time && <div>{time}</div>}
        </div>
      </div>

      <div style={{ fontSize: 12, marginTop: 8 }}>{description}</div>
    </div>
  );
}
