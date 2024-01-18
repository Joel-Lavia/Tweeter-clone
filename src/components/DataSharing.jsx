import { createContext, useState } from "react";
import data from "../Models/Data";
import TweetForm from "./TweetForm";

export const ContextGlobal = createContext(null);

function DataSharing({children}) {
const [dataValue,setDataValue] = useState(data);
const [inputValue,setInputValue] = useState('');
  
const addTweet = () => {
  if(inputValue !== ''){
    dataValue.unshift(
      {
        id:dataValue.length+1,
        tweetSetence:inputValue
      }
    )
  setDataValue(e => [...e,inputValue])
  setInputValue('');
  }
  
}
return(
<ContextGlobal.Provider value={{dataValue,addTweet,inputValue,setInputValue}}>
<TweetForm/>
</ContextGlobal.Provider>
) 
}
export default DataSharing