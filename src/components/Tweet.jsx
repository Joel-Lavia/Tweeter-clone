import data from "../Models/Data";
function Twett() {
  const tweet = data.map((dataAll) => {
    return (
      <div key={dataAll.id}>
        <h1>{dataAll.nomTweet}</h1>
        <p>{dataAll.tweetSetence}</p>
      </div>
    );
  });

  return <section>{tweet}</section>;
}
export default Twett;
