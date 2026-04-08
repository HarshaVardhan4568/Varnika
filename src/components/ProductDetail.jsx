import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

import fit1 from "../assets/products/fit1.jpeg";
import fit2 from "../assets/products/fit2.jpeg";
import fit3 from "../assets/products/fit3.jpeg";
import fit4 from "../assets/products/fit4.jpeg";
import fit5 from "../assets/products/fit5.jpeg";
import fit6 from "../assets/products/fit6.jpeg";
import fit7 from "../assets/products/fit7.jpeg";
import fit8 from "../assets/products/fit8.jpeg";
import fit9 from "../assets/products/fit9.jpeg";
import fit10 from "../assets/products/fit10.jpeg";

const products = [
  {
    id: 1,
    name: "Peach Embroidered Gown",
    price: "₹4,999",
    image: fit1,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Royal Purple Lehenga",
    price: "₹9,999",
    image: fit2,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Lavender Designer Lehanga",
    price: "₹9,999",
    image: fit3,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Sun Shine Festive Lehanga",
    price: "₹8,499",
    image: fit4,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Haldi heritage lehanga",
    price: "₹7,299",
    image: fit5,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Wine Gold Elegance Lehanga",
    price: "₹9,999",
    image: fit6,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Saffron glow Bridal Lehanga",
    price: "₹9,999",
    image: fit7,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Ruby Heritage Bridal Lehanga ",
    price: "₹11,999",
    image: fit8,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Mehendi Grace Anarkali",
    price: "₹6,499",
    image: fit9,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    name: "White Classic Lehanga",
    price: "₹7,499",
    image: fit10,
    sizes: ["S", "M", "L", "XL"],
  },
];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[500px] object-contain rounded-lg"
      />

      {/* DETAILS */}
      <div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-xl text-wine mt-2">{product.price}</p>

        {/* SIZE */}
        <div className="mt-5">
          <p className="font-semibold mb-2">Select Size</p>

          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-4 py-2 rounded ${
                  selectedSize === size ? "bg-wine text-white" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex gap-4">
          <button
            className="bg-wine text-white px-6 py-3 rounded"
            onClick={() => {
              if (!selectedSize) return;
              addToCart(product, selectedSize);
            }}
          >
            Add to Cart
          </button>

          <button
            className="border px-6 py-3 rounded"
            onClick={() => {
              if (!selectedSize) return;
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
