import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState({
    checkNft: false,
    checkMetaParts: false,
    checkPotatoToken: false,
    nftVal: null,
    metaPartVal: null,
    potatoTokenVal: null,
    runAgain: false,
    stopCarousel: true,
    getRender: false,
  });

  return (
    <Context.Provider value={{ items, setItems }}>{children}</Context.Provider>
  );
};
