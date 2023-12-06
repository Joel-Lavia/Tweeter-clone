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

function SidebarLeft() {

  return (
    <section className="sidebarSection">

     <div className="sidebar">
      <button className="sidebarbtn"><img src={tweet} alt="btn Tweeter" /></button>
      <button className="sidebarbtn"><img src={home} alt="btn home" />Home</button>
      <button className="sidebarbtn"><img src={explor} alt="btn explor" />Explore</button>
      <button className="sidebarbtn"><img src={notification} alt="btn notification" />Notifications</button>
      <button className="sidebarbtn"><img src={messages} alt="btn messages" />Messages</button>
      <button className="sidebarbtn"><img src={bookMark} alt="btn bookmarks" />Bookmarks</button>
      <button className="sidebarbtn"><img src={list} alt="btn twett list" />Lists</button>
      <button className="sidebarbtn"><img src={profilTweet} alt="btn profil tweet" />Profil</button>
      <button className="sidebarbtn"><img src={more} alt="btn more" />More</button>
      <button className="button">Tweet</button>
     </div>
    
     
<ProfilSetting imgProfilSidebaLeft={profilePhoto} />

    </section>
  );
}
export default SidebarLeft;
