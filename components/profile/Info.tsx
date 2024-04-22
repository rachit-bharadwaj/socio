"use client"

import { UserContext } from "@/contexts/user";
import { useContext, useEffect } from "react";

import Cookies from "js-cookie";

const Info = () => {

  useEffect(() => {
    const fetchAddress = () => {
      const address = Cookies.get("walletAddress");
      setUserDetails({
        ...userDetails,
        userAddress: address,
      });
    };

    fetchAddress();
  }, []);

  const {userDetails, setUserDetails} = useContext(UserContext);

  return (
    <section className="flex flex-col gap-5 p-3">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-bold truncate max-w-xs">{userDetails.userAddress}</p>
        
        <p className="text-sm text-primary-300">
          {userDetails.bio}
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-10">
          <button>
            <p className="text-primary-100 text-xl font-bold">{userDetails.followers.length}</p>
            <p className="text-primary-300 ">Followers</p>
          </button>

          <button>
            <p className="text-primary-100 font-bold text-xl">{userDetails.following.length}</p>
            <p className="text-primary-300">Following</p>
          </button>
        </div>

        <button className="border border-primary-300 px-10 py-2 rounded-full hover:text-primary-600 hover:bg-primary-200 transition-all ease-in-out duration-500">
          Edit Profile
        </button>
      </div>
    </section>
  );
};

export default Info;
