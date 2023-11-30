import data from "../Models/Data";
import Avatar from "./Avatar";
function Twett() {
  const tweet = data.map((dataAll) => {
    return (
      <div key={dataAll.id}>
        <Avatar avatarImg={dataAll.avatar} />
        <div>
          <h1 className="tweet-title-author">{dataAll.nomTweet}</h1>
        </div>
      </div>
    );
  });

  return <section>{tweet}</section>;
}
export default Twett;
