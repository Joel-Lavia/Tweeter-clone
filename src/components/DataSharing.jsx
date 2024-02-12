import { createContext, useEffect, useState } from "react";
import Data from "../data/initial-data.json";
import axios from "axios";

export const ContextGlobal = createContext();

function DataSharing({ children }) {
  const [dataValue, setDataValue] = useState(Data);

  useEffect(() => {
    axios.get("http://localhost:3000/1").then((response) => {
      setDataValue(response.data);
      console.log(response.data);
    });
  }, []);

  const addTweet = (newTweet) => {
    const dataValueTemporary = dataValue;
    setDataValue([newTweet, ...dataValueTemporary]);
  }
  return (
    <ContextGlobal.Provider value={{ dataValue, addTweet}}>
      {children}
    </ContextGlobal.Provider>
  );
}
export default DataSharing;
