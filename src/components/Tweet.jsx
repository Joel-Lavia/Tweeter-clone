import data from "../Models/Data";
function Twett() {
  const tweet = data.map((dataAll) => dataAll);
  console.log(tweet);
  return (
    <section>
      <p key={tweet.id}>{tweet}</p>
    </section>
  );
}
export default Twett;
