import { createContext, useEffect, useState } from "react";
import Data from "../data/initial-data.json";
import axios from "axios";

export const ContextGlobal = createContext();

function DataSharing({ children }) {
  const [dataValue, setDataValue] = useState(Data.tweets);
  const [dataUsers,setDataUsers] = useState(Data.currentUser);

  useEffect(() => {
    axios.get("http://localhost:3000/tweets")
    .then((response) => {
      setDataValue(response.data);
      console.log(response);
    });
  }, []);

  const addTweet = (newTweet) => {
    const dataValueTemporary = dataValue;
    axios.post("http://localhost:3000/tweets",newTweet)
    .then((response) => setDataValue([response.data, ...dataValueTemporary]))
    // setDataValue([newTweet, ...dataValueTemporary]);
    
  }
  return (
    <ContextGlobal.Provider value={{dataValue, addTweet,dataUsers}}>
      {children}
    </ContextGlobal.Provider>
  );
}
export default DataSharing;
