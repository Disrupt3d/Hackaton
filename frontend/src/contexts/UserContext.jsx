import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export function ContextProvider({ children }) {
  const [question, setQuestion] = useState([]);
  const [idList, setIdList] = useState("627d10d315d0576711953a2d");
  useEffect(() => {
    axios
      .get(
        `https://api.trello.com/1/lists/${idList}/cards?key=d88ab3bc8bf7a3b1f04a6140e92571f4&token=cffe19b7ce5fcad156c22ae6b2a25ec0be43f33dca637b1ca566f9cd1826f550`
      )
      .then((res) => {
        setQuestion(res.data);
      });
  }, []);

  const handleIdList = () => {
    setIdList(idList);
  };

  return (
    <UserContext.Provider value={{ question, handleIdList }}>
      {children}
    </UserContext.Provider>
  );
}
