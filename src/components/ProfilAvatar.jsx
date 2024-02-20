// import Avatar from "./Avatar";
// import profilePhoto from '../images/profile-photo.png'
import BtnEditProfil from "./BtnEditProfil";
// import { user } from "../profils/users";
// import DataProfil from "../data/initial-data.json";
// import { Link } from "react-router-dom";
import ProfilFollow from "./ProfilFollow";

function ProfilAvatar() {
  return (
    <main className="timeline">
      {/* {DataProfil.currentUser.map((datas) => ( */}
        {/* <Link to={`follow/${DataProfil.currentUser}`}></Link> */}
      {/* ))} */}
      <ProfilFollow/>
      <BtnEditProfil />
    </main>
  );
}
export default ProfilAvatar;
