import ProfilSetting from "./ProfilSetting";
import imgProfilCnn from '../images/tweet-profile-photo.png'
import group from "../images/Group.png"
import imgProfilnytm from "../images/Tweet2.png"
import imgMascotetweeter from '../images/MascoteImg.png'
import BtnFollow from "./BtnFollow";


function Follow() {
return(
<section>
 <div>
 <ProfilSetting imgProfilSidebaLeft={imgProfilCnn} namProfil={'CNN'} details={'@CNN'} iconProfil={group}/>
 <BtnFollow/>
 </div>

 <div>
 <ProfilSetting imgProfilSidebaLeft={imgMascotetweeter} namProfil={'Tweetter'} details={'@Twetter'} iconProfil={group}/>
 <BtnFollow/>
 </div>

 <div>
 <ProfilSetting imgProfilSidebaLeft={imgProfilnytm} namProfil={'The New York Times'} details={'@nytimes'} iconProfil={group}/>
 <BtnFollow/>
 </div>
 
<button>Show more</button>

</section>
);
}
export default Follow