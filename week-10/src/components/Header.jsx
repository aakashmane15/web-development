import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <div>
        <Link to="/">Landing Page</Link>|<Link to="/route-1">First Route</Link>|
        <Link to="/route-2">Second Route</Link>
      </div>
    </>
  );
}
