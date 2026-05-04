import { Link, useNavigate } from "react-router-dom";
import "../pages/Home.css";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <div className="nav">

      <h3 className="logo" onClick={() => navigate("/")}>
        {"Laiba • Shaban".split("").map((char, i) => (
          <span key={i} style={{ "--i": i }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h3>

      <div className="menu">
        <div className="menu-group">
          <Link to="/about" className="pill">About</Link>
          <span className="divider"></span>
          <span className="pill">Work</span>
        </div>
      </div>

      <div className="social">
        <span className="pill">Email</span>
        <span className="pill">in</span>
      </div>

    </div>
  );
}