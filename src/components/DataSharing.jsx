import { createContext, useState } from "react";
import data from "../Models/Data";
import profilePhoto from '../images/profile-photo.png'
import group from "../images/Group.png";

import reply from "../images/Reply.png";
import retweet from "../images/Retweet.png";
import react from "../images/React.png";
import btndowland from "../images/Buton.png";


export const ContextGlobal = createContext();

function DataSharing({children}) {
const [dataValue,setDataValue] = useState(data);
const [inputValue,setInputValue] = useState('');
  
const addTweet = () => {
  if(inputValue !== ''){
    const dataValueTemporary = dataValue;
    dataValueTemporary.unshift(
      {
        id:dataValue.length+1,
        avatar: profilePhoto,
        nomTweet: "Bradley Ortiz",
        certification: group,
        lienTweet: "@bradley_",
        tweetSetence:inputValue,
        btn: {
          replyImg: reply,
          numbeeReply:0,
    
          retweetImg: retweet,
          numberRetweet:0,
    
          reactImg: react,
          numberReact:0,
    
          btnDowlandImg: btndowland,
        },

      }
    )
  setDataValue(dataValueTemporary)
  setInputValue('');
  }
}
return(
<ContextGlobal.Provider value={{dataValue,addTweet,inputValue,setInputValue}}>
{children}
</ContextGlobal.Provider>
) 
}
export default DataSharing