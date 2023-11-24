import imgProfil from '../images/profile-photo.png';
function avatar(avatarImg){
    return(
        <a href="#" className='avatar'>
        <img src={imgProfil}  alt="profile-photo.png"/>
        </a>
    );
}
export default avatar