import { createContext, useState } from "react";
import data from "../Models/Data";
import TweetForm from "./TweetForm";


export const ContextGlobal = createContext(null);

function DataSharing({children}) {
const [dataValue,setDataValue] = useState(data);
const addData =() =>{
    if (inputValue !== '') {
    setDataValue((e) => [...e,inputValue])
    setInputValue('');
    }
  }
    
return(
<ContextGlobal.Provider value={[dataValue,addData()]}>
{/* <button className="button ml-80 mb-5" onClick={(e)=> {e.preventDefault();sharing()}} >Tweet</button> */}
<TweetForm/>
</ContextGlobal.Provider>
) 
}
export default DataSharing