import ProfilSetting from "./ProfilSetting";
import imgProfilCnn from '../images/tweet-profile-photo.png'
import privateImg from "../images/Private.png"


function Follow() {
return(
<section>
<ProfilSetting imgProfilSidebaLeft={imgProfilCnn} namProfil={'CNN'} details={'@CNN'} iconProfil={privateImg}/>
<ProfilSetting imgProfilSidebaLeft={imgProfilCnn} namProfil={'CNN'} details={'@CNN'} iconProfil={privateImg}/>
<ProfilSetting imgProfilSidebaLeft={imgProfilCnn} namProfil={'CNN'} details={'@CNN'} iconProfil={privateImg}/>
</section>
);
}
export default Follow