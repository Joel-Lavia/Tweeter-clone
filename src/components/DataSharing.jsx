import { createContext, useState } from "react";
import Data from "../data/initial-data.json";
import profilePhoto from '../images/profile-photo.png'
import group from "../images/Group.png";

export const ContextGlobal = createContext();

function DataSharing({children}) {
const [dataValue,setDataValue] = useState(Data);
const [inputValue,setInputValue] = useState('');
  
const addTweet = () => {
  // if(inputValue !== ''){
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

      numbeeReply: 0,

      numberRetweet:0,

      numberReact: 0,
        }

      }
    )
  setDataValue(dataValueTemporary)
  setInputValue('');
  }
// }
return(
<ContextGlobal.Provider value={{dataValue,addTweet,inputValue,setInputValue}}>
{children}
</ContextGlobal.Provider>
) 
}
export default DataSharing