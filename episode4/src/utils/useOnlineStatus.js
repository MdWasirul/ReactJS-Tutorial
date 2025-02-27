import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(true);
  // console.log(online);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(false);
    });
    window.addEventListener("online", () => {
      setOnline(true);
    });
  }, []);

  return online;
};
export default useOnlineStatus;
