import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${resId}`);
    const json = await data.json();
    setResInfo(json);
    console.log(json);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { title, image, price, description, category, rating } = resInfo;

  return (
    <div className="detailPage">
      <div>
        <img src={image} alt="img" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>Counts: {rating.count}</span>, &nbsp;
          <span>Rating: {rating.rate}</span>
        </p>
        <p>Price: ${price}</p>
        <p>Category: {category}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default RestaurentMenu;
