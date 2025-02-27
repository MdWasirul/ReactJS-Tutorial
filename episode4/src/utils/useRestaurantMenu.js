import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch Data
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(MENU_URL + resId);
    const data = await response.json();
    setResInfo(data);
  };

  return resInfo;
};
export default useResturantMenu;
