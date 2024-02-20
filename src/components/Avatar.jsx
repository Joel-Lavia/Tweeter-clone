import { Link } from "react-router-dom";

function Avatar({ avatarImg }) {
  return (
<Link className="avatar" to={"ProfilFollow/userId"}>
<img src={avatarImg} alt="profile-photo.png" />
</Link>    
  );
}
export default Avatar;
