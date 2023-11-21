import imgStart from "../images/Timeline-Prop.png"
function Header(){
    return(
        <header className="header">
            <h1 className="page-title">Home</h1>
            <a href="#" className="top-tweets"><img src={imgStart} alt="timeline-prop.png"/></a>
        </header>
    );
}
export default Header;