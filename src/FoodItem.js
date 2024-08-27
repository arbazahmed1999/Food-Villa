import { IMG_CDN_URL } from "./Contant";
import { useDispatch } from "react-redux";
import { removeItem } from "./utils/cartSlice";
const FoodItem = ({ card }) => {
  const { name, imageId, description, defaultPrice, id } = card?.info;
  const dispatch = useDispatch();
  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };
  return (
    <div className="w-[200px] h-[400px] p-2 m-2 shadow-lg bg-yellow-100 break-words">
      <img
        className="w-[100%] h-[150px] object-cover"
        alt="img"
        src={IMG_CDN_URL + imageId}
      />
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h4>Price:{defaultPrice / 100}</h4>
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
};

export default FoodItem;
