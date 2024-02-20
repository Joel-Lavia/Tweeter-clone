import { useParams } from "react-router-dom";
import DataFollower from "../data/initial-data.json";
function ProfilFollow() {
  const { userId } = useParams();
  const followers = DataFollower.currentUser.find((allFollowers) => allFollowers.id === userId);

  return (
    <div>
      {
        followers && (
        <div>
      <p>{followers.tweetSetence}</p>
        </div>
        )
      }
    </div>
  );
}
export default ProfilFollow;
