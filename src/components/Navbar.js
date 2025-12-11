import "./Navbar.css";

export default function Navbar({ toggleTheme, dark }) {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/logo2.png" className="nav-logo" alt="Logo" />
        <span className="nav-name">Arjun Singh</span>
      </div>

      <button onClick={toggleTheme} className="themeIconBtn">
        {dark ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
