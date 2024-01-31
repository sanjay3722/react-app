import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurentMenu = useRestaurentMenu(resId);

  if (restaurentMenu === null) {
    return <Shimmer />;
  }

  const { title, image, price, description, category, rating } = restaurentMenu;

  const dispatch = useDispatch();
  const handelAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="detailPage flex p-5 w-[1200px] mx-auto">
      <div className="w-[250px] mr-5">
        <img src={image} alt="img" className="w-100" />
      </div>
      <div className="text-gray-600">
        <h1 className="font-bold text-lg">{title}</h1>
        <p>
          <span>Counts: {rating.count}</span>, &nbsp;
          <span>Rating: {rating.rate}</span>
        </p>
        <p className="text-green-600">Price: ${price}</p>
        <p>Category: {category}</p>
        <p>Description: {description}</p>

        <button
          className="bg-black p-2 mt-5 shadow-lg text-white"
          onClick={() => handelAddItem(restaurentMenu)}
        >
          Add to cart+
        </button>
      </div>
    </div>
  );
};

export default RestaurentMenu;
