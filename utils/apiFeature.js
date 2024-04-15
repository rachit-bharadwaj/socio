

import {userContractAddress, userContractABI } from "../constants";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

export const checkIfWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      const firstAccount = accounts[0];
      return firstAccount;
    } catch (error) {
      return false;
    }
  }
  return false;
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const firstAccount = accounts[0];
      return firstAccount;
    } catch (error) {
      return false;
    }
  }
  return false;
};

const fetchContract = async (signerOrProvider) =>
  new ethers.Contract(userContractAddress, userContractABI, signerOrProvider);

export const connectingToContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = await fetchContract(signer);

    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const convertTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
};
