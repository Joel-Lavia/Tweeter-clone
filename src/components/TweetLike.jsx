import { useState } from "react";
// import { NodeBuilderFlags } from "typescript";

function TweetLike({commentbtn, nbr,heart}) {
  const [counter, setCount] = useState(0);
  const situationCountLike = () => {
    if (counter === 0) {
      setCount(counter + 1);
    } else if (counter >= 1) {
      setCount(counter - 1);
    }
  };

  
  return (
    <div>
      <button
        className="flex gap-4 text-base text-gray-600  leading-5"
        onClick={() =>{situationCountLike()}}>
        {commentbtn}
        {counter + nbr}
        {heart}
      </button>
    </div>
  );
}
export default TweetLike;
