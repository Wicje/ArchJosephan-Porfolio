
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="nav-logo">Josephan</div>

        <div className="nav-links">
          <a href="#works">Works</a>
          <a href="#media">Media</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
