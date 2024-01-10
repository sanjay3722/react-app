import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurentMenu = useRestaurentMenu(resId);

  if (restaurentMenu === null) {
    return <Shimmer />;
  }

  const { title, image, price, description, category, rating } = restaurentMenu;

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
