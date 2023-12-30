import RestaurentCard from "./Restaurent";
import resObject from "./../utils/mokeData";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

const Body = () => {
  // Local State Variable
  const [listOfRestaurent, setListOfRestaurent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setListOfRestaurent(json);
  };

  // Conditional Rendering
  // if (listOfRestaurent.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="topBar">
        <div className="search">Search</div>
        <div className="filter">
          <button
            className="filter-btn"
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

      <div className="rest-container">
        {listOfRestaurent.map((resData) => (
          <RestaurentCard key={resData.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
