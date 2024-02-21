import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(Boolean(localStorage.getItem("token")))

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className=" m-auto  ">
        <div className="mx-10 my-32 flex gap-10 flex-wrap justify-center">
          {products.map((item) => {
            return (
              <>
                <Link to={`/details/${item._id}`} state={{ products: item }}>
                  <div className="bg-teal-800   w-[300px] p-7 rounded hover:bg-slate-950">
                    <img style={{ width: "80px", height: "80px", borderRadius: "50%" }} src={`http://localhost:3000/${item.profile}`} />
                    <h1 className="text-white ">{item.name}</h1>
                    <p className="text-white ">{item.price}</p>
                    <p className="text-white ">{item.details}</p>
                    <div className="text-white text-end">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
