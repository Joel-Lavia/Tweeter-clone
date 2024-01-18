import imgProfil from "../images/profile-photo.png";
import Avatar from "./Avatar";
import DataSharing from "./DataSharing";
import TweetForm from "./TweetForm";

function TweetEditor() {
  return (
    <section className="tweet-editor">
      <Avatar avatarImg={imgProfil} />
      <TweetForm/>
    </section>
  );
}
export default TweetEditor;
