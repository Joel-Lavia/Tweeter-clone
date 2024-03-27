import { createContext, useEffect, useState } from "react";
import Data from "../data/initial-data.json";
import axios from "axios";

export const ContextGlobal = createContext();

function DataSharing({ children }) {
  const [dataValue, setDataValue] = useState(Data);
  // const [dataUsers,setDataUsers] = useState(Data.currentUser);

 const data = () => {
  useEffect(() => {axios.get("http://localhost:3000/tweets")
  .then((response) => {
    setDataValue(response.data);
    console.log(response);
  });
}, []);
 }
 console.log(data());
 
  

  const addTweet = (newTweet) => {
    const dataValueTemporary = dataValue;
    axios.post("http://localhost:3000/tweets",newTweet)
    .then((response) => setDataValue([response.data, ...dataValueTemporary]))
    // setDataValue([newTweet, ...dataValueTemporary]);
    
  }
  return (
    <ContextGlobal.Provider value={{dataValue, addTweet}}>
      {children}
    </ContextGlobal.Provider>
  );
}
export default DataSharing;
