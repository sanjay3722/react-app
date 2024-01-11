import RestaurentCard from "./Restaurent";
import { Link } from "react-router-dom";
import resObject from "./../utils/mokeData";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setListOfRestaurent(json);
    setFilteredRestaurent(json);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h>Oops look like your internet is not working!!</h>;
  }

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex p-3 justify-between">
        {/* Search */}
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="border-1 border px-4 py-2"
          />
          <button
            onClick={() => {
              const filteredRestaurent = listOfRestaurent.filter((res) =>
                res.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredRestaurent);
            }}
            className=" px-4 py-2 bg-[green] text-white"
          >
            Search
          </button>
        </div>

        {/* Filter */}
        <div className="filter">
          <button
            className=" px-4 py-2 bg-[green] text-white"
            type="button"
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => res?.rating?.rate > 4
              );
              setListOfRestaurent(filteredList);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurent.map((resData) => (
          <Link to={"/restarent/" + resData?.id} key={resData.id}>
            <RestaurentCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
