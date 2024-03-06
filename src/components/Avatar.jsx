import { Link } from "react-router-dom";

function Avatar({ avatarImg }) {
  return (
    <div className="">
      <img src={avatarImg} alt="profile-photo.png" />
    </div>
  );
}
export default Avatar;
