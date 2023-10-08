import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../Atoms/Sidebar";
import ProductCard from "../../Atoms/ProductCard"
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from your API endpoint
    axios
      .get("/api/v1/product/get-product")
      .then((response) => {
        if (response.data.success) {
          setProducts(response.data.products);
        } else {
          // Handle API error here
          console.error("API request failed:", response.data.message);
        }
      })
      .catch((error) => {
        // Handle network or other errors here
        console.error("Axios request failed:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex mt-32">
      <Sidebar />
      <div className="flex-1">
        <h1 className=" text-2xl ml sm:text-3xl sm:ml-6 font-semibold">Product List</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
