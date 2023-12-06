import Avatar from "./Avatar"
import privateImg from "../images/Private.png"
function ProfilSetting({imgProfilSidebaLeft}) {
return(
<div className="profilSibare">
 <Avatar avatarImg={imgProfilSidebaLeft}/>
 <p className="tweet-name"> <span>Bradley Ortiz <img src={privateImg} alt="" /> </span> <span className="tweet-title-details">@bradley_</span>
  </p> 
 </div>
)
}
export default ProfilSetting