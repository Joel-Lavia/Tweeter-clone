import group from "../images/Group.png";
import TweetAction from "./TweetAction";
import Avatar from "./Avatar";

function Tweet({
  tweettitle,
  tweettitleDetail,
  tweetimg,
  tweetText,
  tweetSheet,
  reply1,
  retweet,
  react,
}) {
  return (
    <section className="tweet">
      <Avatar avatarImg={tweetimg} />

      <div className="tweet-body">
        <p className="tweet-title">
          <span className="tweet-title-author">{tweettitle}</span>
          <a href="#">
            <img src={group} alt="group" />
          </a>
          <span className="tweet-title-details">{tweettitleDetail}</span>
        </p>

        <p className="tweet-text">{tweetText}</p>
        <a href="#" className="tweet-image">
          <img src={tweetSheet} alt="" />
        </a>

        <TweetAction btnreply={reply1} btnretweet={retweet} btnreact={react} />
      </div>
    </section>
  );
}
export default Tweet;
