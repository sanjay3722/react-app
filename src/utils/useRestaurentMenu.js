import { useEffect, useState } from "react";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${resId}`);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurentMenu;
