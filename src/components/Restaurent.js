const RestaurentCard = (props) => {
  const { resData } = props;
  const { image, title, price, rating, category } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={image} alt="title" />
      <div className="res-body">
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{rating?.rate} ratings</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default RestaurentCard;
