import imgStart from "../images/Timeline-Prop.png";
function Header() {
  return (
    <header className="header">
      <h1 className="page-title">Home</h1>
      <button className="top-tweets">
        <img src={imgStart} alt="timeline-prop.png" />
      </button>
    </header>
  );
}
export default Header;
