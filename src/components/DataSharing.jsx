import { createContext, useState } from "react";
import Data from "../Models/Data.json";
import profilePhoto from '../images/profile-photo.png'
import group from "../images/Group.png";

import { FaRegComment } from "react-icons/fa";
import { LiaRetweetSolid } from "react-icons/lia";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";


export const ContextGlobal = createContext();

function DataSharing({children}) {
const [dataValue,setDataValue] = useState(Data);
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
          replyImg:FaRegComment,
      numbeeReply: 57,

      retweetImg:LiaRetweetSolid,
      numberRetweet: 144,

      reactImg:CiHeart,
      numberReact: 123,

      btnDowlandImg:PiDownloadSimpleLight,
        }

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