export default function Navbar({ toggleTheme, dark }) {
  return (
    <div className="navbar">
      <h2 className="logo">
        <span className="tag">&lt;/&gt;</span> Arjun Singh
      </h2>

      <button onClick={toggleTheme} className="themeIconBtn">
        {dark ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
