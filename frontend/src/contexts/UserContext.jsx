import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function ContextProvider({ children }) {
  const [prenom, setPrenom] = useState("");

  return (
    <UserContext.Provider value={{ prenom, setPrenom }}>
      {children}
    </UserContext.Provider>
  );
}
