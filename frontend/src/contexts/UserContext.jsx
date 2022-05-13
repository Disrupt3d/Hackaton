import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function ContextProvider({ children }) {
  const [prenom, setPrenom] = useState("");
  const handlePrenom = () => {
    setPrenom(prenom);
  };

  return (
    <UserContext.Provider value={{ prenom, handlePrenom }}>
      {children}
    </UserContext.Provider>
  );
}
