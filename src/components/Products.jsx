import { useNavigate } from "react-router-dom";
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
import fit11 from "../assets/products/fit11.jpeg";

const products = [
  { id: 1, name: "Peach Embroidered Gown", price: "₹4,999", image: fit1 },
  { id: 2, name: "Royal Purple Lehenga", price: "₹9,999", image: fit2 },
  { id: 3, name: "Lavender Designer Lehanga", price: "₹9,999", image: fit3 },
  { id: 4, name: "Sun Shine Festive Lehanga", price: "₹8,499", image: fit4 },
  { id: 5, name: "Haldi heritage lehanga", price: "₹7,299", image: fit5 },
  { id: 6, name: "Wine Gold Elegance Lehanga", price: "₹9,999", image: fit6 },
  { id: 7, name: "Saffron glow Bridal Lehanga", price: "₹9,999", image: fit7 },
  {
    id: 8,
    name: "Ruby Heritage Bridal Lehanga",
    price: "₹11,999",
    image: fit8,
  },
  { id: 9, name: "Mehendi Grace Anarkali", price: "₹6,499", image: fit9 },
  { id: 10, name: "White Classic Lehanga", price: "₹7,499", image: fit10 },
  { id: 11, name: "Royal Blue Lehanga", price: "₹9,999", image: fit11 },
];

function Products() {
  const navigate = useNavigate();

  return (
    <div
      id="collection"
      className="w-full pt-24 px-10 md:px-16 lg:px-24 py-14 bg-white"
    >
      {/* TITLE */}
      <h2 className="text-3xl text-center mb-12 font-semibold tracking-wide">
        Our Collection
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="bg-white rounded-xl cursor-pointer 
            transition duration-300 
            hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl bg-black flex items-center justify-center h-[300px]">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full object-contain transition duration-500 hover:scale-110"
              />
            </div>

            {/* DETAILS */}
            <div className="px-2 pt-4 pb-2">
              <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>

              <p className="text-[#7B1E3A] font-semibold mt-1">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
