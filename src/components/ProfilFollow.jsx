import { Link, useParams } from "react-router-dom";
import Data from "../data/initial-data.json";
import Layout from "./layout";
import SidebarLeft from "./SidebarLeft";
import Trends from "./Trends";
import { FaArrowLeft } from "react-icons/fa";

function ProfilFollow() {
  const { userId } = useParams();
  const user = Data.currentUser.find((userItem) => userItem.nomTweet === userId
  );

  return (
    <Layout>
      <SidebarLeft />
      <main main className="timeline">
        {user && (
          <section>
            <div className="border-b border-b-gray-900 pb-7">
              <Link to={"/"} className="flex gap-3 mt-7 leading-4">
                <FaArrowLeft />
                <span className="font-bold flex gap-2">
                  {user.nomTweet} <img src={user.certification} alt="" />
                </span>
              </Link>
            </div>

            <div className="relative">

            <img src={user.backgroundSectionProfil} alt="" className="relative" />

            <img src={user.avatar} alt="img avatar tweet" className="absolute bottom-1 left-5 border rounded-full" />
            </div>
            <button className="border rounded-full p-2 font-bold">Follow</button>

            <p>{user.tweetSetence}</p>
          </section>
        )}
      </main>
      <Trends />
    </Layout>
  );
}
export default ProfilFollow;
