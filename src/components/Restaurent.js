const RestaurentCard = (props) => {
  const { resData } = props;
  const { image, title, price, rating, category } = resData;
  return (
    <div className="res-card">
      <img className="res-img" src={image} alt="title" />
      <div className="res-body">
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{rating?.rate} ratings</p>
        <p>Price $ {price}</p>
      </div>
    </div>
  );
};

export default RestaurentCard;
