import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/Varnika.jpeg";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <>
      {/* 🧭 NAVBAR */}
      <div className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Varnika" className="h-20 drop-shadow-md" />
        </Link>

        {/* Menu */}
        <div className="flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#450719]">
            Shop
          </Link>

          {/* CART WITH COUNT */}
          <Link to="/cart" className="hover:text-[#450719] relative">
            Cart
            {cart.length > 0 && (
              <span className="ml-1 bg-[#450719] text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
