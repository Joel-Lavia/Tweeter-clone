import img from "../images/img.png";
import gif from "../images/Gif.png";
import pol from "../images/Poll.png";
import emoji from "../images/Emoji.png";
import schedule from "../images/Schedule.png";
import imgProfil from "../images/profile-photo.png";
import Avatar from "./Avatar";

function TweetEditor() {
  return (
    <section className="tweet-editor">
      <Avatar avatarImg={imgProfil} />
      <form action="" className="tweet-editor-form">
        <input
          type="text"
          name=""
          id=""
          className="tweet-editor-input"
          placeholder="What's happening ?"
        />
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <button>
              <img src={img} alt="button dowlan img" />
            </button>
            <button>
              <img src={gif} alt="button dowlan img" />
            </button>
            <button>
              <img src={pol} alt="button dowlan img" />
            </button>
            <button>
              <img src={emoji} alt="button dowlan img" />
            </button>
            <button>
              <img src={schedule} alt="button dowlan img" />
            </button>
          </div>
          <button className="button">Tweet</button>
        </div>
      </form>
    </section>
  );
}
export default TweetEditor;
