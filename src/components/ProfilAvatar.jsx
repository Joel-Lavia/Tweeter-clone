import Avatar from "./Avatar";
import profilePhoto from '../images/profile-photo.png'
import BtnEditProfil from "./BtnEditProfil";
function ProfilAvatar() {
 return(
<main className="timeline">
 <section className="bg-indigo-700 mt-16">

<div className=" flex">
<div className="-mt-14 flex flex-col">
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