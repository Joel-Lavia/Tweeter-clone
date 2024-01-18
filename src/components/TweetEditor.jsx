import imgProfil from "../images/profile-photo.png";
import Avatar from "./Avatar";
import DataSharing from "./DataSharing";
import TweetForm from "./TweetForm";

function TweetEditor() {
  return (
    <section className="tweet-editor">
      <Avatar avatarImg={imgProfil} />
      <DataSharing>
      <TweetForm/>
      </DataSharing>
    </section>
  );
}
export default TweetEditor;
