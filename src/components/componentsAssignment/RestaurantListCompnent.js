const RestaurantListCompnent = (props) => {
  const { resData, children } = props;
  
  return (
    <div className="res-list">
      <h1>{resData.name}</h1>
      <div>{children}</div>
    </div>
  );
};

export default RestaurantListCompnent;
