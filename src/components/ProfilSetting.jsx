import Avatar from "./Avatar"
function ProfilSetting({imgProfilSidebaLeft,namProfil,details,iconProfil}) {
return(
<div className="profilSibare">
 <Avatar avatarImg={imgProfilSidebaLeft}/>
 <p className="tweet-name"><span> {namProfil} <img src={iconProfil} alt="" /> </span><span className="tweet-title-details">{details}</span>
  </p> 
 </div>
)
}
export default ProfilSetting