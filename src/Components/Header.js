import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect rendered");
  }, []);

  const OnlineStatus = useOnlineStatus();

  return (
    <nav className="bg-pink-200 text-gray-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img className="w-20 h-25 rounded-full" src={LOGO_URL} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className="hover:text-gray-300 transition">
            Online Status: <span className="font-semibold">{OnlineStatus ? "Online" : "Offline"}</span>
          </li>
          <li><Link to="/" className="hover:text-black transition">Home</Link></li>
          <li><Link to="/About" className="hover:text-black transition">About Us</Link></li>
          <li><Link to="/Contact" className="hover:text-black transition">Contact Us</Link></li>
          <li><Link to="/Grocery" className="hover:text-black transition">Grocery</Link></li>
          <button 
            className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
