import { createContext, useState } from "react";
import data from "../Models/Data";
// import TweetForm from "./TweetForm";
import Twett from "./Tweet";

export const ContextGlobal = createContext(null);
const[inputTweet, setInputTweet] = useState(data);
const sharing = () =>{
setInputTweet(
data.unshift(
{
id:0,
tweetSetence: "" 
}
)
);
}

function DataSharing() {
return(
<ContextGlobal.Provider value={inputTweet}>
{/* <button className="button ml-80 mb-5" onClick={()=>sharing()} >Tweet</button> */}
</ContextGlobal.Provider>
) 
}
export default DataSharing