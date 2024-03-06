import { useContext, useState } from "react";
import Avatar from "./Avatar";
import TweetLike from "./TweetLike";
import { ContextGlobal } from "./DataSharing";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { LiaRetweetSolid } from "react-icons/lia";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import Data from "../data/initial-data.json";

function Twett() {
  const { dataValue } = useContext(ContextGlobal);
  const tweets = Data.tweets.map((tweet) => {
  // const  dataFollowers = Data.currentUser.find((alldataFollowers) => alldataFollowers.id === dataAll.id)
  
    return (
    <div key={tweet.id} className="flex py-4	border-b border-b-gray-900">
        {/*Composant des divers avatar de la page*/}
        <Link to={`ProfilFollow/${tweet.nomTweet}`} className="avatar">
        <Avatar avatarImg={tweet.avatar} />
        </Link>

        {/*differents tweets de la page*/}
        <div className="flex flex-col	gap-2	">
          {/*differents tweets-title de la page*/}
          <p className="flex text-base	gap-2	">
            <Link to={`ProfilFollow/${tweet.nomTweet}`}>
              <h1 className="text-base">{tweet.nomTweet}</h1>
            </Link>
            <Link to={`ProfilFollow/${tweet.nomTweet}`}>
              <img src={tweet.certification} alt="group" />
            </Link>
            <Link to={`ProfilFollow/${tweet.nomTweet}`}>
              <span className="text-neutral-600	">{tweet.lienTweet}</span>
            </Link>
          </p>
          {/*differents phrase de la page*/}
          <p className="text-white-700 text-base ">{tweet.tweetSetence}</p>

          {/*differents tweet-images de la page*/}
          <a href="#" className="pt-8	 pr-4	pb-4	pl-4		">
            <img
              src={tweet.tweetimg}
              alt=""
              className="max-w-full h-auto	rounded-3xl"
            />
          </a>

          {/*Tweetbutton*/}
          <div className="flex justify-center items-center gap-20 ">
            <TweetLike
              commentbtn={<FaRegComment fontSize={"1.4em"} />}
              nbr={tweet.btn.numbeeReply}
            />
            <TweetLike
              commentbtn={<LiaRetweetSolid fontSize={"1.4em"} />}
              nbr={tweet.btn.numberRetweet}
            />
            <TweetLike
              commentbtn={<CiHeart fontSize={"1.4em"} />}
              nbr={tweet.btn.numberReact}
            />

            <button>
              <PiDownloadSimpleLight color="#4B5563" fontSize={"1.4em"} />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <section>{tweets}</section>;
}
export default Twett;
