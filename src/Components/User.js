import { useEffect, useState } from "react";
import useFetchUser from "../utils/useFetchUser";
useFetchUser;
export const User = () => {
  const userInfo = useFetchUser();
  return (
    <div className="user-card">
      <h2>Name: {userInfo.name}</h2>
      <h3>Location: Sri Ganganagar, Rajasthan</h3>
      <h4>Contact: {userInfo.login}</h4>
    </div>
  );
};
