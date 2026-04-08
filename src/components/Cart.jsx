import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const phone = "917793971950"; // your WhatsApp number

  // 💰 Calculate total
  const total = cart.reduce((acc, item) => {
    const price = Number(item.price.replace(/[^0-9]/g, ""));
    return acc + price;
  }, 0);

  // 📲 Checkout function
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const message = `Hi Varnika 👋

I want to order:

${cart
  .map(
    (item, i) =>
      `${i + 1}. ${item.name}
Price: ${item.price}
Size: ${item.size}`,
  )
  .join("\n\n")}

------------------------
Total: ₹${total.toLocaleString()}

Please confirm availability and share further details.`;

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {/* ITEMS */}
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-5">
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    {/* DETAILS */}
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-[#450719] font-medium">{item.price}</p>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    </div>
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* 💰 TOTAL */}
            <div className="mt-8 text-right">
              <p className="text-2xl font-bold text-[#450719]">
                Total: ₹{total.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Made-to-order • Stitching included
              </p>
            </div>

            {/* 🛒 CHECKOUT */}
            <div className="mt-6">
              <button
                onClick={handleCheckout}
                className="w-full bg-[#450719] text-white py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
              >
                Checkout on WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
