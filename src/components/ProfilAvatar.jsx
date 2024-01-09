import Avatar from "./Avatar";
import profilePhoto from '../images/profile-photo.png'
import BtnEditProfil from "./BtnEditProfil";
function ProfilAvatar() {
 return(
<section className="timeline">
<div className="fleximgProfil ">

<div className="sectionProfilAvatar">
<Avatar avatarImg={profilePhoto}/>
<p className="profilSibare">Bradley Ortiz</p>
<p className="tweet-title-details">@bradley_</p>
</div>
<div className="editProfilbtn">
<BtnEditProfil/>
</div>

</div>


</section>
 );   
}
export default ProfilAvatar