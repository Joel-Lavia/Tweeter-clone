import Avatar from "./Avatar";
import profilePhoto from '../images/profile-photo.png'
import BtnEditProfil from "./BtnEditProfil";
function ProfilAvatar() {
 return(
<main className="timeline">
 <section className="">

<div className="fleximgProfil">
<div className="">
<Avatar avatarImg={profilePhoto}/>
<p className="profilSibare">Bradley Ortiz</p>
<p className="tweet-title-details">@bradley_</p>
</div>
<BtnEditProfil/> 
</div>


 </section>
</main>
 );   
}
export default ProfilAvatar