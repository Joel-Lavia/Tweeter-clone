import { useParams } from "react-router-dom";
import Data from "../data/initial-data.json";
function ProfilFollow() {
  const { userId } = useParams();
  const user = Data.currentUser.find((userItem) => userItem.nomTweet === userId);

  return (
    <div>
      {user && (
        <div>
          <p>{user.tweetSetence}</p>
        </div>
      )}
    </div>
  );
}
export default ProfilFollow;
