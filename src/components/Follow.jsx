import ProfilSetting from "./ProfilSetting";
import imgProfilCnn from '../images/tweet-profile-photo.png'
import group from "../images/Group.png"
import imgProfilnytm from "../images/Tweet2.png"
import imgMascotetweeter from '../images/MascoteImg.png'


function Follow() {
return(
<section>
<ProfilSetting imgProfilSidebaLeft={imgProfilCnn} namProfil={'CNN'} details={'@CNN'} iconProfil={group}/>
<ProfilSetting imgProfilSidebaLeft={imgMascotetweeter} namProfil={'Tweetter'} details={'@Twetter'} iconProfil={group}/>
<ProfilSetting imgProfilSidebaLeft={imgProfilnytm} namProfil={'The New York Times'} details={'@nytimes'} iconProfil={group}/>


</section>
);
}
export default Follow