import { useParams } from "react-router-dom";
import Data from "../data/initial-data.json";
import Layout from "./layout";
import SidebarLeft from "./SidebarLeft";
import Trends from "./Trends";
function ProfilFollow() {
  const { userId } = useParams();
  const user = Data.currentUser.find((userItem) => userItem.nomTweet === userId);

  return (
      <Layout>
      <SidebarLeft/>
      <main main className="timeline">
      {user && (
        <div>
        <p>{user.tweetSetence}</p>
        </div>
      )}
      </main>
       <Trends/>
      </Layout>
  );
}
export default ProfilFollow;
