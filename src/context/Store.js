import axios from "axios";
import { createContext, useContext, useState } from "react";
const ReactContext = createContext();
const base = "https://google-search3.p.rapidapi.com/api/v1";

export const Store = ({ children }) => {
  const [store, setStore] = useState([]);
  const [loader, setLoader] = useState(false);
  const [queryText, setQueryText] = useState("");

  const getData = async (param) => {
    setLoader(true);
    try {
      const response = await axios.get(`${base}${param}`, {
        headers: {
          "x-user-agent": "desktop",
          "x-proxy-location": "US",
          "x-rapidapi-host": "google-search3.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      });
      setStore(response.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReactContext.Provider
      value={{ getData, loader, store, queryText, setQueryText }}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useStore = () => useContext(ReactContext);
