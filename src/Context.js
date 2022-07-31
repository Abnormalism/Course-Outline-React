import React, { useContext, useState } from "react";

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const hello = "hello";
  return (
    <AppContext.Provider value={{ activeCategory, setActiveCategory, hello }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
