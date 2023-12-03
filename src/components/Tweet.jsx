import data from "../Models/Data";
import Avatar from "./Avatar";
function Twett() {
  const tweet = data.map((dataAll) => {
    return (
      <div key={dataAll.id} className="tweet">
        <Avatar avatarImg={dataAll.avatar} />
        <div className="tweet-body">
          <p className="tweet-title">
            <h1 className="tweet-title-author">{dataAll.nomTweet}</h1>
            <a href="#">
              <img src={dataAll.certification} alt="group" />
            </a>
            <span className="tweet-title-details">{dataAll.lienTweet}</span>
          </p>
          <p className="tweet-text">{dataAll.tweetSetence}</p>
          <a href="#" className="tweet-image">
            <img src={dataAll.tweetimg} alt="" />
          </a>
        </div>
      </div>
    );
  });

  return <section>{tweet}</section>;
}
export default Twett;
