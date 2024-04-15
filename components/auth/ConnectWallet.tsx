"use client";

import React, { useContext } from "react";
import { connectWallet } from "@/utils/apiFeature";
import { Web3ModalContext } from "@/contexts/web3modal";

const ConnectWallet = () => {
  const { setConnectedAddress, setWeb3Modal } = useContext(Web3ModalContext);

  const connect = async () => {
    const address = await connectWallet();
    if (address) {
      setConnectedAddress(address);
      setWeb3Modal(null);
      console.log("Connected to wallet: ", address);
    }
  };

  return <button onClick={connect}>Connect to Wallet</button>;
};

export default ConnectWallet;
