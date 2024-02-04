import { useEffect, useState } from "react";
import useFetchUser from "../utils/useFetchUser";
useFetchUser;
export const User = () => {
  const userInfo = useFetchUser();
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h2>Name: {userInfo.name}</h2>
      <h3>Location: Sri Ganganagar, Rajasthan</h3>
      <h4>Contact: {userInfo.login}</h4>
    </div>
  );
};
