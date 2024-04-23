"use client";

import React, { useContext } from "react";
import { connectWallet } from "@/utils/apiFeature";
import { Web3ModalContext } from "@/contexts/web3modal";
import Cookies from "js-cookie";
import { UserContext } from "@/contexts/user";
import { useRouter } from "next/navigation";


const ConnectWallet = () => {
  const { setConnectedAddress, setWeb3Modal } = useContext(Web3ModalContext);
  const {userDetails, setUserDetails} = useContext(UserContext);

  const router = useRouter()

  const connect = async () => {
    const address = await connectWallet();
    if (address) {
      setConnectedAddress(address);
      setWeb3Modal(null);
      Cookies.set("walletAddress", address);
      setUserDetails({...userDetails, userAddress: address});
      console.log(userDetails)
      console.log("Connected to wallet: ", address);
      router.push("/")
      console.log("Connected to wallet: ", address);
    }
  };

  return <button onClick={connect} className="flex mx-auto items-center px-10 py-3 bg-purple-700 text-2xl rounded-full text-white font-medium">
    
    Connect to Wallet
    
    </button>;
};

export default ConnectWallet;
