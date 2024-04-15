"use client"

import { createContext, useState } from "react";

export const Web3ModalContext = createContext();

export const Web3ModalProvider = ({ children }) => {
  const [connectedAddress, setConnectedAddress] = useState(null);
  const [web3Modal, setWeb3Modal] = useState(null);

  return (
    <Web3ModalContext.Provider
      value={{ connectedAddress, setConnectedAddress, web3Modal, setWeb3Modal }}
    >
      {children}
    </Web3ModalContext.Provider>
  );
};
