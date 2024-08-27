import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "./utils/cartSlice";
import { IMG_CDN_URL } from "./Contant";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearCart());
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const orderplaced = () => {
    window.alert("Order Placed Succesfully\nThanks for Shopping");
    handleclearcart();
  };

  let total = 0;
  let Charges = 39;
  let Delivery = 19;

  return (
    <div className="cart-container flex text-center justify-center">
      {cartItems.length === 0 ? (
        <div>
          <img
            className="empty w-80"
            alt="Empty"
            src={require("./assets/img/empty-cart.png")}
          />
          <div className="cart-text text-xl font-semibold mt-6 text-gray-700">
            Your cart is empty
          </div>
          <div className="cart-des text-gray-500 mt-2">
            You can go to home page to view more restaurants
          </div>
          <Link to="/">
            <div className="btn-home flex justify-center text-center items-center px-4 py-2  bg-black text-white rounded">
              SEE RESTAURANTS NEAR YOU
            </div>
          </Link>
        </div>
      ) : (
        <div className="empty-cart text-center">
          <button
            className="add-btn font-semibold text-xl border border-solid border-gray-300 text-black rounded-md shadow-lg px-4 py-1 mt-3"
            onClick={() => handleclearcart()}
          >
            Cart Item
          </button>

          <div className="fooditems m-3">
            <div>Item</div>
            <div>description</div>
            <div>Price</div>
            <div>Remove</div>
          </div>
          <hr className="border-white-[0.5px] border-gray-700" />

          {cartItems.map((item, index) => {
            var { price } = item;
            total = total + price;

            return (
              <div className="fooditems text-center items-center" key={item.id}>
                <img
                  className="cart-img object-contain h-20 max-w-20"
                  alt="img"
                  src={IMG_CDN_URL + item?.imageId}
                />
                <div>{item?.name}</div>
                <div>Rs {price / 100}/-</div>
                <button onClick={() => handleRemove(index)}>
                  <i className="text-red-600 fa-solid fa-trash-can"></i>
                </button>
              </div>
            );
          })}
          <hr className="border-white-[0.5px] border-gray-700 py-2" />
          <div className="order-container flex flex-col items-center text-center border border-gray-200 p-3 mb-5">
            <div></div>
            <div></div>
            <div className="my-order justify-center items-center border border-solid border-gray-700 w-[200px]">
              <div className="bill-deatils font-medium text-sm text-blue-950">
                Bill Details
              </div>
              <div className="food-container flex justify-between items-center text-xs text-gray-600">
                <div className="subtotal">Item Total:</div>
                <div className="subtotal">Rs {total / 100}/-</div>
              </div>
              <div className="food-container flex justify-between items-center text-xs text-gray-600">
                <div className="subtotal">Delivery partner fee:</div>
                <div className="subtotal">Rs {Delivery}/-</div>
              </div>
              <div className="line border-b-[1px] border-gray-200"></div>
              <div className="food-container flex justify-between items-center text-xs text-gray-600">
                <div className="subtotal text-sm">
                  Govt Taxes & Other Charges:
                </div>
                <div className="subtotal text-sm">Rs {Charges}/-</div>
              </div>
              <hr className="border-white-[0.5px] border-gray-700" />
              <div className="food-container flex justify-between items-center font-medium text-xs text-blue-950">
                <div className="totalorder">TO PAY:</div>
                <div className="totalorder">
                  Rs {total / 100 + Charges + Delivery}/-
                </div>
              </div>
            </div>
          </div>
          <button
            className="placeorder text-center items-center px-2 py-1 bg-black text-white rounded mt-2 ml-0"
            onClick={() => {
              orderplaced();
            }}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
