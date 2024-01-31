import { useContext } from "react";
import UserContext from "../context/userContext";
const RestaurentCard = (props) => {
  const { resData } = props;
  const { image, title, price, rating, category } = resData;
  const data = useContext(UserContext);

  return (
    <div className="p-3 m-3 bg-gray-50 w-[200px] shadow-md">
      <img className="object-contain h-32 w-64" src={image} alt="title" />
      <div className="flex flex-col">
        <h3 className="text-[18px]">{title}</h3>
        <p className="text-sm">{category}</p>
        <p>{rating?.rate} ratings</p>
        <p>Price $ {price}</p>
      </div>
    </div>
  );
};

// Higher Order Component

export const withPromotedLael = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-2 rounded-md">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
