import data from "../Models/Data";
import Avatar from "./Avatar";
import TweetLike from "./TweetLike";
function Twett() {

  const tweet = data.map((dataAll) => {
    return (
      <div key={dataAll.id} className="tweet">
        {/*Composant des divers avatar de la page*/}
        <Avatar avatarImg={dataAll.avatar} />

        {/*differents tweets de la page*/}
        <div className="tweet-body">
          {/*differents tweets-title de la page*/}
          <p className="tweet-title">
            <h1 className="tweet-title-author">{dataAll.nomTweet}</h1>
            <a href="#">
              <img src={dataAll.certification} alt="group" />
            </a>
            <span className="tweet-title-details">{dataAll.lienTweet}</span>
          </p>
          {/*differents phrase de la page*/}
          <p className="tweet-text">{dataAll.tweetSetence}</p>

          {/*differents tweet-images de la page*/}
          <a href="#" className="tweet-image">
            <img src={dataAll.tweetimg} alt="" />
          </a>
          
          {/*Tweetbutton*/}
          <div className="tweet-actions">
            <TweetLike likeImg={dataAll.btn.replyImg} nbr={dataAll.btn.numbeeReply}/>
            <TweetLike likeImg={dataAll.btn.retweetImg} nbr={dataAll.btn.numberRetweet}/>
            <TweetLike likeImg={dataAll.btn.reactImg} nbr={dataAll.btn.numberReact}/>
            <button className="tweet-action">
              <img src={dataAll.btn.btnDowlandImg} alt="button Dowland" />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <section>{tweet}</section>;
}
export default Twett;
