import RestaurentCard from "./Restaurent";
import resObject from "./../utils/mokeData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {resObject.map((restaurent) => (
          <RestaurentCard key={restaurent.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
