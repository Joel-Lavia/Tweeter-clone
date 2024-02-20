import tweet from "../icons/Twitter.png";
import home from "../icons/Home-Fill.png";
import explor from "../icons/Explore.png";
import notification from "../icons/Group.png";
import messages from "../icons/Messages.png";
import bookMark from "../icons/Bookmarks.png";
import list from "../icons/Lists.png";
import profilTweet from "../icons/Profile.png";
import profilePhoto from "../images/profile-photo.png"
import more from "../icons/More.png";
import ProfilSetting from "./ProfilSetting";
import privateImg from "../images/Private.png"
import { Link } from "react-router-dom";


function SidebarLeft() {

  return (
    <section className="sidebarSection">

     <div className="sidebar">
    <Link to={'/'}><button className="sidebarbtn"><img src={tweet} alt="btn Tweeter" /></button></Link>
    <Link to={'/'}><button className="sidebarbtn"><img src={home} alt="btn home" />Home</button></Link>
    <Link to={'/Explore'}><button className="sidebarbtn"><img src={explor} alt="btn explor" />Explore</button></Link>
    <Link to={'/Notifications'}><button className="sidebarbtn"><img src={notification} alt="btn notification" />Notifications</button></Link>
    <Link to={'/Messages'}><button className="sidebarbtn"><img src={messages} alt="btn messages" />Messages</button></Link>
    <Link to={'/Bookmarks'}><button className="sidebarbtn"><img src={bookMark} alt="btn bookmarks" />Bookmarks</button></Link>
    <Link to={'/Lists'}><button className="sidebarbtn"><img src={list} alt="btn twett list" />Lists</button></Link>
    <Link to={'/Profil'}><button className="sidebarbtn"><img src={profilTweet} alt="btn profil tweet" />Profil</button></Link>
    <Link to={'/More'}><button className="sidebarbtn"><img src={more} alt="btn more" />More</button></Link>
    <button className="button">Tweet</button>
     </div>    
<ProfilSetting imgProfilSidebaLeft={profilePhoto} namProfil={'Bradley Ortiz'} details={'@bradley_'} iconProfil={privateImg} />

    </section>
  );
}
export default SidebarLeft;
