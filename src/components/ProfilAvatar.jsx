import Avatar from "./Avatar";
import profilePhoto from '../images/profile-photo.png'
import BtnEditProfil from "./BtnEditProfil";
import { user } from "../profils/users";

function ProfilAvatar() {
const profil = user.map((allProfil) => {
return(
<div>
<p className="profilSibare">{allProfil.nomTweet}</p>
<p className="tweet-title-details">{allProfil.lienTweet}</p>
</div>
)


})

 return(
<main className="timeline">
 <section className="">

<div className="fleximgProfil">
<div className="">
<Avatar avatarImg={profilePhoto}/>
{profil}
</div>
<BtnEditProfil/> 
</div>


 </section>
</main>
 );   
}
export default ProfilAvatar