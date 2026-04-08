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

const products = [
  {
    id: 1,
    name: "Peach Embroidered Gown",
    price: "₹4,999",
    image: fit1,
  },
  {
    id: 2,
    name: "Royal Purple Lehenga",
    price: "₹9,999",
    image: fit2,
  },
  {
    id: 3,
    name: "Lavender Designer Lehanga",
    price: "₹9,999",
    image: fit3,
    },
    {
        id: 4,
        name: "Sun Shine Festive Lehanga",
        price: "₹8,499",
        image: fit4,
    },
    {
        id: 5,
        name: "Haldi heritage lehanga",
        price: "₹7,299",
        image: fit5,
    },
    {
        id: 6,
        name: "Wine Gold Elegance Lehanga",
        price: "₹9,999",
        image: fit6,
    },
    {
        id: 7,
        name: "Saffron glow Bridal Lehanga",
        price: "₹9,999",
        image: fit7,
    },
    {
        id: 8,
        name: "Ruby Heritage Bridal Lehanga ",
        price: "₹11,999",
        image: fit8,
    },
    {
        id: 9,
        name: "Mehendi Grace Anarkali",
        price: "₹6,499",
        image: fit9,
    },
    {
        id: 10,
        name: "White Classic Lehanga",
        price: "₹7,499",
        image: fit10,
      },
];

function Products() {
  const navigate = useNavigate();

  return (
    <div id="collection" className="bg-white pt-24 p-10">
      <h2 className="text-3xl text-center mb-10 font-semibold">
        Our Collection
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-xl transition duration-300"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>

            <p className="text-[#7B1E3A] font-bold mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
