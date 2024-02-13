// import Avatar from "./Avatar";
// import profilePhoto from '../images/profile-photo.png'
import BtnEditProfil from "./BtnEditProfil";
// import { user } from "../profils/users";
import DataProfil from "../data/initial-data.json";
import { useParams } from "react-router-dom";

function ProfilAvatar() {
  const { id } = useParams();
  const dataProfils = DataProfil.currentUser.map((dataAllProfil) => {
    return(
        <div key={dataAllProfil.id}>
            <p>{dataAllProfil.userId}</p>
        </div>
    )
  })
  return (
    <main className="timeline">
    {dataProfils}
      <BtnEditProfil />
    </main>
  );
}
export default ProfilAvatar;
