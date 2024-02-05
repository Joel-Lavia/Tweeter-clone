import { useContext } from "react";
import Avatar from "./Avatar";
import TweetLike from "./TweetLike";
import { ContextGlobal } from "./DataSharing";
import { PiDownloadSimpleLight } from "react-icons/pi";
import Data from "../Models/Data.json";


function Twett() {

  const { dataValue } = useContext(ContextGlobal);
  const tweet = dataValue.map((dataAll) => {
    return (
      <div key={dataAll.id} className="flex py-4	border-b border-b-gray-900">
        {/*Composant des divers avatar de la page*/}
        <Avatar avatarImg={dataAll.avatar} />

        {/*differents tweets de la page*/}
        <div className="flex flex-col	gap-2	">
          {/*differents tweets-title de la page*/}
          <p className="flex text-base	gap-2	">
            <h1 className="text-base">{dataAll.nomTweet}</h1>
            <a href="#">
              <img src={dataAll.certification} alt="group" />
            </a>
            <span className="text-neutral-600	">{dataAll.lienTweet}</span>
          </p>
          {/*differents phrase de la page*/}
          <p className="text-white-700 text-base ">{dataAll.tweetSetence}</p>

          {/*differents tweet-images de la page*/}
          <a href="#" className="pt-8	 pr-4	pb-4	pl-4		">
            <img
              src={dataAll.tweetimg}
              alt=""
              className="max-w-full h-auto		rounded-3xl			"
            />
          </a>

          {/*Tweetbutton*/}
          <div className="flex justify-center items-center gap-20 ">
            <TweetLike
              commentbtn={
                <dataAll.btn.replyImg fontSize={"1.4em"} color="#ff0000" />
              }
              nbr={dataAll.btn.numbeeReply}
            />
            <TweetLike
              commentbtn={<dataAll.btn.retweetImg fontSize={"1.4em"} />}
              nbr={dataAll.btn.numberRetweet}
            />
            <TweetLike
              commentbtn={<dataAll.btn.reactImg fontSize={"1.4em"} />}
              nbr={dataAll.btn.numberReact}
            />
            <button>
              <PiDownloadSimpleLight color="#4B5563" fontSize={"1.4em"} />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <section>{tweet}</section>;
}
export default Twett;
