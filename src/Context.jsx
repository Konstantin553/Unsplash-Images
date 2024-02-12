import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("dogs");

  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
