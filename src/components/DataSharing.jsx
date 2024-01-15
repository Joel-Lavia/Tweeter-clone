import { createContext, useState } from "react";
import data from "../Models/Data";
import TweetForm from "./TweetForm";


export const ContextGlobal = createContext(null);

function DataSharing() {
    const[inputTweet, setInputTweet] = useState(data);
    const sharing = () => {
    setInputTweet(
    inputTweet.unshift(
    {
    id:0,
    tweetSetence: inputTweet
    }
    )
    );
    }
return(
<ContextGlobal.Provider value={inputTweet}>
<button className="button ml-80 mb-5" onClick={(e)=> {e.preventDefault();sharing()}} >Tweet</button>
<TweetForm/>
</ContextGlobal.Provider>
) 
}
export default DataSharing