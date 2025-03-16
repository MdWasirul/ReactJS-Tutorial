import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header rendered");

  useEffect(() => {
    // console.log("UseEffect called!");
  }, [btnNameReact]);

  const userOnlineStatus = useOnlineStatus();
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
          <li className="px-2">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
