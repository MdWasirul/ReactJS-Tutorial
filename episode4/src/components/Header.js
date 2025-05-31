import { LOGO_URL } from "../utils/constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";
  // console.log("Header rendered");

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const userOnlineStatus = useOnlineStatus();

  const { LoggedInUser } = useContext(UserContext);
  console.log(LoggedInUser);

  useEffect(() => {
    // console.log("UseEffect called!");
  }, [btnNameReact]);

  //Selector
  //Subscribing  the store  using Selector

  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem);

  return (
    <div className="flex justify-between flex-wrap bg-orange-600 text-white  text-[20px] shadow-lg sticky top-0">
      <div className="w-36">
        <img className="logo" src={LOGO_URL} alt="food Logo" />
      </div>
      <div className="">
        <ul className="flex  p-4 m-4 flex-wrap">
          <li className="px-2">
            Online Status:{userOnlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 ">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="px-2">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li className="px-2">
            <Link to="/grocery" className="nav-link">
              Grocery
            </Link>
          </li>
          <li className="px-2">
            <Link to="/cart" className="nav-link">
              Cart- ({cartItem.length} items)
            </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-2">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
