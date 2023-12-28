const RestaurentCard = (props) => {
  const { resData } = props;
  const { resImage, resName, cuisine, rating, eta } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={resImage} alt="food kfc" />
      <h3>{resName}</h3>
      <p>{cuisine}</p>
      <p>{rating}</p>
      <p>{eta}</p>
    </div>
  );
};

export default RestaurentCard;
