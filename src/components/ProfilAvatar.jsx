import Avatar from "./Avatar";
import profilePhoto from '../images/profile-photo.png'
import BtnEditProfil from "./BtnEditProfil";
function ProfilAvatar() {
 return(
<main className="timeline">

<Avatar avatarImg={profilePhoto}/>
<p className="profilSibare">Bradley Ortiz</p>
<p className="tweet-title-details">@bradley_</p>
<BtnEditProfil/>

</main>
 );   
}
export default ProfilAvatar