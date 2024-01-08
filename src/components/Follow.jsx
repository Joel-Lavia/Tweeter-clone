import ProfilSetting from "./ProfilSetting";
import imgProfilCnn from '../images/tweet-profile-photo.png'
import group from "../images/Group.png"
import imgProfilnytm from "../images/Tweet2.png"
import imgMascotetweeter from '../images/MascoteImg.png'
import BtnFollow from "./BtnFollow";
import Btnshomore from "./Btnshowmore";


function Follow() {
return(
<section className="section-trend">

<div className="follow">
 <div className="followspace">
 <ProfilSetting imgProfilSidebaLeft={imgProfilCnn} namProfil={'CNN'} details={'@CNN'} iconProfil={group}/>
 <ProfilSetting imgProfilSidebaLeft={imgMascotetweeter} namProfil={'Tweetter'} details={'@Twetter'} iconProfil={group}/>
 <ProfilSetting imgProfilSidebaLeft={imgProfilnytm} namProfil={'The New York Times'} details={'@nytimes'} iconProfil={group}/>
 </div>


 <div className="followspace BtnFollowspace">
<BtnFollow/>
<BtnFollow/>
<BtnFollow/>
 </div>

 </div>

<p className="btnfollowShomore">
<Btnshomore/>
</p>

</section>
);
}
export default Follow