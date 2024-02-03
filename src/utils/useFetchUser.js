import { useState, useEffect } from "react";
const useFetchUser = () => {
  const [userInfo, setUserInfo] = useState({}); // Change from [] to {}

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://api.github.com/users/kartik-narang007");
      const json = await data.json();
      console.log(json);

      setUserInfo(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return userInfo;
};
export default useFetchUser;