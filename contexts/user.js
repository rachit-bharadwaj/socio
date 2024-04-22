"use client";

import { createContext, useEffect, useState } from "react";
import { connectWallet, connectingToContract } from "../utils/apiFeature";

import Cookies from "js-cookie";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // state variable
  const [walletAddress, setWalletAddress] = useState("");
  const [userDetails, setUserDetails] = useState({
    userAddress: "",
    following: [],
    followers: [],
    posts: [],
    bio: "",
  });
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  

  // functions
  // const fetchUserDetails = async () => {
  //   setLoading(true);
  //   try {
  //     // fetch user details from the blockchain
  //     const account = await connectWallet();
  //     setWalletAddress(account);
  //     const contract = await connectingToContract();
  //     const userDetails = await contract.getUserDetails();
  //     setUserDetails({
  //       userAddress: userDetails.userAddress,
  //       following: userDetails.following,
  //       followers: userDetails.followers,
  //       posts: userDetails.posts,
  //       bio: userDetails.bio,
  //     });
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchUserDetails();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        walletAddress,
        userDetails,
        setUserDetails,
        posts,
        setPosts,
        error,
        loading,
        // fetchUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
