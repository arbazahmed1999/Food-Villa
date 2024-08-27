import { useState } from "react";
import Logo from "./assets/img/FoodVilla.png";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="logo w-40 p-3" alt="logo" src={Logo} />
  </a>
);
const Mobile = ({ isOpen, setIsopen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <nav className="mobile">
        <div
          className="close-icon flex text-2xl justify-end cursor-pointer"
          onClick={() => setIsopen(!isOpen)}
        >
          <span>
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="mobile-option flex flex-col justify-center items-center h-[100%]">
          <div className="mobile-options flex text-2xl m-3">
            <Link to="/" onClick={() => setIsopen(!isOpen)} className="link">
              <li className="home">Home</li>
            </Link>
          </div>
          <div className="mobile-options flex text-2xl m-3">
            <Link
              to="/about"
              onClick={() => setIsopen(!isOpen)}
              className="link"
            >
              <li className="about">About</li>
            </Link>
          </div>
          <div className="mobile-options flex text-2xl m-3">
            <Link
              to="/contact"
              onClick={() => setIsopen(!isOpen)}
              className="link"
            >
              <li className="contact">Contact</li>
            </Link>
          </div>
          <div className="mobile-options flex text-2xl m-3">
            <Link to="/Login" className="link">
              {isLoggedIn ? (
                <Link to="/" className="link">
                  <li
                    className="logout flex justify-center items-center px-4 py-2 bg-black hover:bg-gray-600 text-white rounded"
                    onClick={() => {
                      // eslint-disable-next-line no-sequences
                      return setIsopen(!isOpen), setIsLoggedIn(false);
                    }}
                  >
                    {" "}
                    Logout
                  </li>
                </Link>
              ) : (
                <li
                  className="login flex justify-center items-center px-4 py-2 bg-black hover:bg-gray-600 text-white rounded"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Login{" "}
                </li>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.item);
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="navbar flex items-center h-[90px] justify-between font-bold text-xl shadow-lg">
      <Title />
      <div className="navbar-items flex list-none">
        <div className="nav-items flex w-auto">
          <ul className="item-name flex items-center justify-center flex-wrap m-auto">
            <Link to="/">
              <li className="mt-2 mr-8 font-semibold">Home</li>
            </Link>
            <Link to="/about">
              <li className="mt-2 mr-8 font-semibold">About</li>
            </Link>
            <Link to="/contact">
              <li className="mt-2 mr-8 font-semibold">Contact</li>
            </Link>
            <Link to="/Login">
              <li className="mt-2 mr-8 font-semibold">
                {isLoggedIn ? (
                  <Link to="/">
                    <button
                      className="flex justify-center items-center px-4 py-2 bg-black hover:bg-gray-600 text-white rounded"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Logout
                    </button>
                  </Link>
                ) : (
                  <button
                    className="flex justify-center items-center px-4 py-2 bg-black hover:bg-gray-600 text-white rounded"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Login
                  </button>
                )}
              </li>
            </Link>
          </ul>
        </div>

        <div className="online-cart flex">
          <Link to="/cart" className="cart p-2">
            <div className="in-cart text-center w-10 mt-2 mr-4">
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              {cartItems.length === 0 ? (
                <span className="cart-length"></span>
              ) : (
                <span className="cart-length inline-table leading-4 text-sm w-3 text-green-600">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>

          <p className="on-off w-10 pt-4">
            {isOnline ? (
              <img
                className="w-6"
                alt="online"
                src={require("./assets/img/online.png")}
              />
            ) : (
              "🔴"
            )}
          </p>

          <div className="mobile-menu hidden">
            <div
              className="open-btn w-16 pt-3 pl-6 cursor-pointer"
              onClick={() => setIsopen(true)}
            >
              <span>
                <i className="fa-solid fa-bars"></i>
              </span>
            </div>
            {isOpen && <Mobile isOpen={isOpen} setIsopen={setIsopen} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
